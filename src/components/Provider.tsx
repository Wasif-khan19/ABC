'use client'

import { useState } from "react"

const Provider = () => {
    const [queryClient] = useState(() => new queryClient)
}

export default Provider
