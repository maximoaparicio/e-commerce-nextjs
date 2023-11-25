'use client'

import type { FormEvent } from 'react'

import { useState } from 'react'

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname

    if (
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.endsWith('amazon')
    ) {
      return true
    }
  } catch (error) {
    return false
  }

  return false
}

function Searchbar() {
  const [searchPrompt, setSearchPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValidLink = isValidAmazonProductURL(searchPrompt)

    if (!isValidLink) return alert('Please provide a valid Amazon link')

    try {
      setIsLoading(true)

      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="mt-12 flex flex-wrap gap-4" onSubmit={handleSubmit}>
      <input
        className="searchbar-input"
        placeholder="Enter product link"
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />

      <button className="searchbar-btn" disabled={searchPrompt === ''} type="submit">
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  )
}

export default Searchbar
