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

const navMenuLink =
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/50 data-[active]:bg-accent/50 h-10 py-2 px-4 group w-max'

export const Navbar = ({ navItems }: Props) => (
  <div className="py-2">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {navItems.map((item, index) => (
            <Link href={`/${item}`} key={index} legacyBehavior passHref>
              <NavigationMenuLink className={navMenuLink}>{item.toUpperCase()}</NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
)
