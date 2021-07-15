// Fetcher for SWR hooks

/**
 * @param {string} endpoint - An endpoint path in the Node Server API
 * @param {object} options
 * @param {[string]} options.baseUrl - Override option to use instead of NEXT_PUBLIC_API_URL
 * @param {object} options.headers - Optional overrider or additional request headers
 */
const fetcher = async (endpoint, options = {}) => {
  const requestBaseUrl = options.baseUrl || process.env.NEXT_PUBLIC_API_URL
  const requestUrl = `${requestBaseUrl}${endpoint}`
  const headers = {
    'api-key': process.env.NEXT_PUBLIC_API_KEY,
    ...options.headers,
  }

  try {
    const response = await fetch(requestUrl, {
      headers,
      method: 'GET',
    })

    if (response.ok) {
      return response.json()
    }

    const error = new Error('Error occurred')
    error.status = response.status
    throw error
  } catch (err) {
    const error = new Error('Failed to fetch:', err)
    error.status = 500
    throw error
  }
}

export default fetcher
