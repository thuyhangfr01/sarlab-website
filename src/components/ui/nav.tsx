'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

import cn from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface SubMenuProps {
  item: {
    title: string;
    icon: LucideIcon;
    variant: 'default' | 'ghost';
    href: string;
  };
  pathName: string;
  isSubmenu2: boolean;
}

interface NavProps {
  menu: {
    title: string;
    submenu: {
      title: string;
      icon: LucideIcon;
      variant: 'default' | 'ghost';
      href: string;
      submenu2?: {
        title: string;
        icon: LucideIcon;
        variant: 'default' | 'ghost';
        href: string;
      }[];
    }[];
  }[];
}

const SubMenuItem = ({ item, pathName, isSubmenu2 }: SubMenuProps) => (
  <Link
    href={item.href}
    className={cn(
      buttonVariants({
        variant: item.href === pathName ? 'default' : 'ghost',
        size: 'sm',
      }),
      isSubmenu2 ? 'pl-10' : 'text-blue-500 font-semibold',
      'justify-start uppercase ',
    )}
  >
    <item.icon className="mr-2 h-4 w-4" />
    {item.title}
  </Link>
);

const Nav = ({ menu }: NavProps) => {
  const pathName = usePathname();
  return (
    <div className="group flex flex-col gap-4 py-2">
      <h1 className="font-bold text-center">SARLAB</h1>
      <nav className="w-64 grid gap-1 px-2">
        {menu.map((menuItem) => (
          <Accordion type="multiple" defaultValue={['item-1']}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-slate-900 hover:bg-slate-700 text-white p-3 rounded-md">
                {menuItem.title}
              </AccordionTrigger>
              <AccordionContent>
                {menuItem.submenu.map((subMenuItem) =>
                  subMenuItem.submenu2 ? (
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="pr-3">
                          <SubMenuItem
                            item={subMenuItem}
                            pathName={pathName}
                            isSubmenu2={false}
                          />
                        </AccordionTrigger>
                        <AccordionContent>
                          {subMenuItem.submenu2.map((subMenuItem2) => (
                            <SubMenuItem
                              item={subMenuItem2}
                              pathName={pathName}
                              isSubmenu2
                            />
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <SubMenuItem
                      item={subMenuItem}
                      pathName={pathName}
                      isSubmenu2={false}
                    />
                  ),
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
