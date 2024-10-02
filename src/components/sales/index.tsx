import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">Últimos clientes</CardTitle>
          <CircleDollarSign className="ml=auto size-4" />
        </div>
        <CardDescription>
          Novos clientes nas últimas 24 horas
        </CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="size-8">
            <AvatarImage src="https://avatars.githubusercontent.com/u/39505479?v=4" />
            <AvatarFallback>WR</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Sujeito Programador</p>
            <span className="text-xs sm:text-sm text-gray-400">well.renato@hotmail.com</span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="size-8">
            <AvatarImage src="https://avatars.githubusercontent.com/u/39505479?v=4" />
            <AvatarFallback>WR</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Sujeito Programador</p>
            <span className="text-xs sm:text-sm text-gray-400">well.renato@hotmail.com</span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="size-8">
            <AvatarImage src="https://avatars.githubusercontent.com/u/39505479?v=4" />
            <AvatarFallback>WR</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Sujeito Programador</p>
            <span className="text-xs sm:text-sm text-gray-400">well.renato@hotmail.com</span>
          </div>
        </article>
      </CardContent>
    </Card>
  )
}