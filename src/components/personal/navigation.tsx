import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@components/ui/navigation-menu";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
    return (
        <div className="bg-white w-full shadow-md fixed top-0 z-50 flex justify-around items-center px-4 py-6 ">
            <div className="max-w-screen-base w-full mx-auto flex justify-between items-center">
            <NavigationMenu>
                <NavigationMenuList className="flex space-x-6">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#home" className="hover:text-gray-600">
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#about" className="hover:text-gray-600">
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                        <NavigationMenuContent className="rounded-2xl">
                        <ul className="p-2 bg-white rounded-2xl w-[150px] flex flex-col items-center justify-center">
                        <li>
                                    <NavigationMenuLink
                                        href="#product1"
                                        className="block px-4 py-2 hover:bg-gray-100 w-full"
                                    >
                                        Product 1
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink
                                        href="#product2"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Product 2
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink
                                        href="#product3"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Product 3
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="text-2xl">Como X</div>

            <NavigationMenu>
                <NavigationMenuList className="flex space-x-6 items-center">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                        <NavigationMenuContent className="rounded-2xl">
                            <ul className="p-2 bg-white rounded-2xl w-[150px] flex flex-col items-center justify-center">
                                <li>
                                    <NavigationMenuLink
                                        href="#page1"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Page 1
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink
                                        href="#page2"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Page 2
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#contact" className="hover:text-gray-600">
                            Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className="relative">
                            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                0
                            </span>
                            <ShoppingCart />
                        </button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            </div>
        </div>
        );
}
