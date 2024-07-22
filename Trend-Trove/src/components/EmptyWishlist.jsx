import React from 'react'
import { IoMdSad } from 'react-icons/io'

export default function EmptyWishlist() {
  return (
    <div className='nothing_in_wishlist_container'>
      <h1 className='nothing_in_wishlist'>Nothing in the wishlist {<IoMdSad />}</h1>
    </div>
  )
}
