import { MoreHorizontal, SquarePen } from "lucide-react";
// import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { Message } from "@/data";
import { Link } from "react-router-dom";

interface SidebarProps {
  isCollapsed: boolean;
  links: {
    name: string;
    messages: Message[];
    avatar: string;
    variant: "secondary" | "ghost";
  }[];
  onClick?: () => void;
  isMobile: boolean;
}

export function Sidebar({ links, isCollapsed }: SidebarProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="relative group flex flex-col h-full gap-4 p-2 data-[collapsed=true]:p-2 ">
      {!isCollapsed && (
        <div className="flex justify-between p-2 items-center">
          <div className="flex gap-2 items-center text-2xl">
            <p className="font-medium">DMs</p>
            <span className="text-zinc-300">
              {"("}
              {links.length}
              {")"}
            </span>
          </div>

          <div>
            <Link
              to="/dashboard"
              className={`${buttonVariants({
                variant: "ghost",
                size: "icon",
              })} "h-9 w-9"`}>
              <MoreHorizontal size={20} />
            </Link>

            <Link
              to="/dashboard"
              className={`${buttonVariants({
                variant: "ghost",
                size: "icon",
              })} "h-9 w-9"`}>
              <SquarePen size={20} />
            </Link>
          </div>
        </div>
      )}
      <nav className="grid gap-2 px-0 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <TooltipProvider key={index}>
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to="/"
                    className={`${buttonVariants({
                      variant: link.variant,
                      size: "icon",
                    })}
                      h-11 w-11 md:size-16 md:w-16
                      ${
                        link.variant === "secondary"
                          ? "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                          : ""
                      }`}>
                    <Avatar className="flex justify-center items-center">
                      <AvatarImage
                        src={link.avatar}
                        alt={link.avatar}
                        width={6}
                        height={6}
                        className="w-10 h-10 "
                      />
                    </Avatar>{" "}
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4">
                  {link.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Link
              key={index}
              to="/dashboard"
              className={`${buttonVariants({
                variant: link.variant,
                size: "lg",
              })} 
              justify-start gap-4 py-8 
              ${
                link.variant === "secondary"
              } ? "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink" : "justify-start gap-4"`}>
              <Avatar className="flex justify-center items-center">
                <AvatarImage
                  src={link.avatar}
                  alt={link.avatar}
                  width={6}
                  height={6}
                  className="size-12 "
                />
              </Avatar>
              <div className="flex flex-col max-w-28 mr-auto">
                <span>{link.name}</span>
                {link.messages.length > 0 && (
                  <span className="text-zinc-400 text-xs truncate ">
                    {link.messages[link.messages.length - 1].name.split(" ")[0]}
                    : {link.messages[link.messages.length - 1].message}
                  </span>
                )}
              </div>
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
