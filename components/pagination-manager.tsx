"use client"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MinMax } from "@/lib/utils";
import { useRef } from "react";

export type PaginationProps = {
    prevPage: string | null,
    nextPage: string | null,
    totalPages: number
    page: number
    baseUrl: string
}

const PaginationManager: React.FC<PaginationProps> = ({ prevPage, nextPage, totalPages, page, baseUrl }) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return <Pagination>
        <PaginationContent>
            {prevPage ? <PaginationItem className="cursor-pointer">
                <PaginationPrevious href={`${baseUrl}&page=${page - 1}`} />
            </PaginationItem> : null}
            <PaginationItem className="cursor-pointer"   >
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"ghost"}>
                            <PaginationEllipsis />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between gap-4">
                                    <Label htmlFor="page">Page:</Label>
                                    <Input
                                        id="page"
                                        defaultValue={page}
                                        className=" h-8"
                                        type="number"
                                        min={1}
                                        max={totalPages}
                                        ref={inputRef}
                                    />
                                    {/* 
                                        Uso window.location en lugar de router.push por un bug debido a que 
                                        router.push no reactiva el suspense, y por lo tanto no carga el loading.tsx 
                                        y da la sensacion de que la web se queda congelada 
                                    */}
                                    <Button onClick={() => window.location.replace(`${baseUrl}?page=${MinMax(0, totalPages, Number(inputRef.current?.value))}`)}>Apply</Button>
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </PaginationItem>
            {nextPage ? <PaginationItem className="cursor-pointer">
                <PaginationNext href={`${baseUrl}&page=${page + 1}`} />
            </PaginationItem> : null}
        </PaginationContent>
    </Pagination>
}

export default PaginationManager;