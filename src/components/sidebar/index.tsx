import Link from 'next/link'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Home, LogOut, Package, PanelBottom, Settings2, ShoppingBag, Users } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

export function Sidebar() {
  return (
    <div className="w-full flex flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link className="flex size-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full" href="#">
              <Package className="size-4" />
              <span className='sr-only'>Dashboard Avatar</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" href="#">
                  <Home className="size-5" />
                  <span className='sr-only'>Início</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Início</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" href="#">
                  <ShoppingBag className="size-5" />
                  <span className='sr-only'>Pedidos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Pedidos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" href="#">
                  <Package className="size-5" />
                  <span className='sr-only'>Produtos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Produtos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" href="#">
                  <Users className="size-5" />
                  <span className='sr-only'>Clientes</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Clientes</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" href="#">
                  <Settings2 className="size-5" />
                  <span className='sr-only'>Configurações</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Configurações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className='mt-auto flex flex-col items-center justify-center gap-4 px-2 py-5'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" href="#">
                  <LogOut className="size-5 text-red-500" />
                  <span className='sr-only'>Sair</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent">
          <Sheet>
            <SheetTrigger asChild>
              <Button size='icon' variant='outline' className="sm:hidden">
                <PanelBottom className="size-5" />
                <span className='sr-only'>Abrir / fechar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className='sm:max-w-xs'>
              <nav className='grid gap-6 text-lg font-medium'>
                <Link
                  className='flex size-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2'
                  prefetch={false}
                  href="#"
                >
                  <Package className="size-5 transition-all" />
                  <span className='sr-only'>Logo do projeto</span>
                </Link>

                <Link
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                  prefetch={false}
                  href="#"
                >
                  <Home className="size-5 transition-all" />
                  Início
                </Link>

                <Link
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                  prefetch={false}
                  href="#"
                >
                  <ShoppingBag className="size-5 transition-all" />
                  Pedidos
                </Link>

                <Link
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                  prefetch={false}
                  href="#"
                >
                  <Package className="size-5 transition-all" />
                  Produtos
                </Link>

                <Link
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                  prefetch={false}
                  href="#"
                >
                  <Users className="size-5 transition-all" />
                  Clientes
                </Link>

                <Link
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                  prefetch={false}
                  href="#"
                >
                  <Settings2 className="size-5 transition-all" />
                  Configurações
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </div>
  )
}