import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
const Orders = () => {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="border shadow-sm rounded-lg p-2">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Order</TableHead>
                            <TableHead className="min-w-[150px]">Customer</TableHead>
                            <TableHead className="hidden md:table-cell">Channel</TableHead>
                            <TableHead className="hidden md:table-cell">Date</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                            <TableHead className="hidden sm:table-cell">Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">#3210</TableCell>
                            <TableCell>Olivia Martin</TableCell>
                            <TableCell className="hidden md:table-cell">Online Store</TableCell>
                            <TableCell className="hidden md:table-cell">February 20, 2022</TableCell>
                            <TableCell className="text-right">$42.25</TableCell>
                            <TableCell className="hidden sm:table-cell">Shipped</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoveHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">Actions</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View order</DropdownMenuItem>
                                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">#3209</TableCell>
                            <TableCell>Ava Johnson</TableCell>
                            <TableCell className="hidden md:table-cell">Shop</TableCell>
                            <TableCell className="hidden md:table-cell">January 5, 2022</TableCell>
                            <TableCell className="text-right">$74.99</TableCell>
                            <TableCell className="hidden sm:table-cell">Paid</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoveHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">Actions</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View order</DropdownMenuItem>
                                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">#3204</TableCell>
                            <TableCell>Michael Johnson</TableCell>
                            <TableCell className="hidden md:table-cell">Shop</TableCell>
                            <TableCell className="hidden md:table-cell">August 3, 2021</TableCell>
                            <TableCell className="text-right">$64.75</TableCell>
                            <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoveHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">Actions</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View order</DropdownMenuItem>
                                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">#3203</TableCell>
                            <TableCell>Lisa Anderson</TableCell>
                            <TableCell className="hidden md:table-cell">Online Store</TableCell>
                            <TableCell className="hidden md:table-cell">July 15, 2021</TableCell>
                            <TableCell className="text-right">$34.50</TableCell>
                            <TableCell className="hidden sm:table-cell">Shipped</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoveHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">Actions</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View order</DropdownMenuItem>
                                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">#3202</TableCell>
                            <TableCell>Samantha Green</TableCell>
                            <TableCell className="hidden md:table-cell">Shop</TableCell>
                            <TableCell className="hidden md:table-cell">June 5, 2021</TableCell>
                            <TableCell className="text-right">$89.99</TableCell>
                            <TableCell className="hidden sm:table-cell">Paid</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoveHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">Actions</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View order</DropdownMenuItem>
                                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">#3201</TableCell>
                            <TableCell>Adam Barlow</TableCell>
                            <TableCell className="hidden md:table-cell">Online Store</TableCell>
                            <TableCell className="hidden md:table-cell">May 20, 2021</TableCell>
                            <TableCell className="text-right">$24.99</TableCell>
                            <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoveHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">Actions</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View order</DropdownMenuItem>
                                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">#3207</TableCell>
                            <TableCell>Sophia Anderson</TableCell>
                            <TableCell className="hidden md:table-cell">Shop</TableCell>
                            <TableCell className="hidden md:table-cell">November 2, 2021</TableCell>
                            <TableCell className="text-right">$99.99</TableCell>
                            <TableCell className="hidden sm:table-cell">Paid</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoveHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">Actions</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View order</DropdownMenuItem>
                                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">#3206</TableCell>
                            <TableCell>Daniel Smith</TableCell>
                            <TableCell className="hidden md:table-cell">Online Store</TableCell>
                            <TableCell className="hidden md:table-cell">October 7, 2021</TableCell>
                            <TableCell className="text-right">$67.50</TableCell>
                            <TableCell className="hidden sm:table-cell">Shipped</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoveHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">Actions</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View order</DropdownMenuItem>
                                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </main>
    )
}

export default Orders








function MoveHorizontalIcon(props:{className:string}) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="18 8 22 12 18 16" />
            <polyline points="6 8 2 12 6 16" />
            <line x1="2" x2="22" y1="12" y2="12" />
        </svg>
    )
}






