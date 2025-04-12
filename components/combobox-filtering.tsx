"use client"
import { useEffect, useState } from "react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "./ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "./ui/button"


type ComboBoxFilteringProps = {
    selectMessage?: string
    searchPlaceholder?: string
    apiSearch: (searchQuery: string) => Promise<{ name: string, value: string }[]>
    onSelect?: (value: string) => void
}

const ComboBoxFiltering: React.FC<ComboBoxFilteringProps> = ({ selectMessage, searchPlaceholder, apiSearch, onSelect }) => {

    const [open, setOpen] = useState(false)
    const [commandInput, setCommandInput] = useState<string>("")
    const [value, setValue] = useState<string>("")
    const [results, setResults] = useState<{ name: string, value: string }[]>([])

    useEffect(() => {
        apiSearch(commandInput).then((res) => {
            setResults(res)
        })
    }, [commandInput])

    return <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="justify-between w-full"
            >
                {value ? value : (selectMessage ?? "Select...")}
                <ChevronsUpDown className="opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
            <Command className="rounded-lg border shadow-md" shouldFilter={false}>
                <CommandInput placeholder={searchPlaceholder ?? "Type..."} value={commandInput} onValueChange={setCommandInput} />
                <CommandList>
                    <CommandEmpty>{commandInput === "" ? "Start typing to load results" : "No results found."}</CommandEmpty>
                    <CommandGroup>
                        {
                            results.map((result) => <CommandItem onSelect={(currentValue) => {
                                setValue(result.name)
                                setOpen(false)
                                if (onSelect) onSelect(currentValue)
                            }} key={result.value} value={result.value}>
                                {result.name}
                            </CommandItem>)
                        }
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
}


export default ComboBoxFiltering