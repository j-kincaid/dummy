import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <span>&copy;{currentYear} Jessica Kincaid</span>
    </footer>
  )
}

export default Footer