import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

function Header() {
  const [showNav, setShowNav] = useState(false);


  return (
    <div>
      <Bars3Icon className="h-6 w-6 text-blue-900" 
      onClick={()=> setShowNav(console.log('hi'))}/>
    </div>
  )
}

export default Header