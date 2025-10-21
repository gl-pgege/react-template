import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { AppRouter } from '../router'

describe('App Router Integration', () => {
  it('renders landing page by default', async () => {
    render(<AppRouter />)
    
    expect(await screen.findByText('React Starter Template')).toBeInTheDocument()
    expect(await screen.findByText('Modern React')).toBeInTheDocument()
  })

  it('renders 404 page for unknown routes', async () => {
    // Navigate to unknown route
    window.history.pushState({}, '', '/unknown-route')
    render(<AppRouter />)
    
    expect(await screen.findByRole('heading', { name: '404' })).toBeInTheDocument()
    expect(await screen.findByText('Page Not Found')).toBeInTheDocument()
  })

  it('can navigate to dashboard from 404 page home link', async () => {
    const user = userEvent.setup()
    
    // Start with 404 page
    window.history.pushState({}, '', '/unknown-route')
    render(<AppRouter />)
    
    expect(await screen.findByRole('heading', { name: '404' })).toBeInTheDocument()
    
    // Click "Go Home" button
    const homeLink = screen.getByRole('link', { name: 'Go Home' })
    await user.click(homeLink)
    
    // Should navigate to landing page
    expect(await screen.findByText('React Starter Template')).toBeInTheDocument()
  })

  it('renders dashboard page at /app/dashboard', async () => {
    // Navigate directly to dashboard
    window.history.pushState({}, '', '/app/dashboard')
    render(<AppRouter />)
    
    // Should see both App Root layout and Dashboard content
    expect(await screen.findByRole('link', { name: 'App' })).toBeInTheDocument() // App Root header
    expect(await screen.findByRole('heading', { name: 'Dashboard' })).toBeInTheDocument() // Dashboard content
    expect(await screen.findByText('Total Users')).toBeInTheDocument() // Dashboard stats
  })

  it('can navigate between routes using navigation links', async () => {
    const user = userEvent.setup()
    
    // Start at dashboard
    window.history.pushState({}, '', '/app/dashboard')
    render(<AppRouter />)
    
    expect(await screen.findByRole('heading', { name: 'Dashboard' })).toBeInTheDocument()
    
    // Click on "App" link in header to go home
    const appLink = screen.getByRole('link', { name: 'App' })
    await user.click(appLink)
    
    // Should navigate to landing page
    expect(await screen.findByText('React Starter Template')).toBeInTheDocument()
  })

  it('maintains proper layout structure on app routes', async () => {
    window.history.pushState({}, '', '/app/dashboard')
    render(<AppRouter />)
    
    // Should have header with navigation
    expect(await screen.findByRole('banner')).toBeInTheDocument()
    expect(await screen.findByRole('link', { name: 'Dashboard' })).toBeInTheDocument()
    
    // Should have main content area
    expect(await screen.findByRole('main')).toBeInTheDocument()
    
    // Dashboard content should be within main
    const main = screen.getByRole('main')
    expect(main).toContainElement(screen.getByRole('heading', { name: 'Dashboard' }))
  })
})
