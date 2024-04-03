 
import React from 'react'

const activenavbar = () => {
    return (
        <div>



            {sidebarLinks.map((link) => {
                const isActive = pathname === link.route || pathname.startsWith(link.route);
                return (
                    <Link href={link.route} key={link.label} className={cn("flex gap-4 items-center p-4 rounded-lg justify-start", { "bg-gray-950": isActive })}>
                        {link.label}
                    </Link>
                )
            })}


        </div>
    )
}

export default activenavbar