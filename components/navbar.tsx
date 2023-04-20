import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui'
import Link from 'next/link'

type Props = {
  navItems: string[]
}

export const Navbar = ({ navItems }: Props) => (
  <div className="py-2">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {navItems.map((item, index) => (
            <Link href={`/${item}`} key={index} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.toUpperCase()}</NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
)
