import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TopicSelect() {
  return (
    <div className="z-50 absolute">
    <Select>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select topic" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Topics</SelectLabel> */}
          <SelectItem value="a">Map</SelectItem>
          <SelectItem value="b">Search</SelectItem>
          <SelectItem value="c">Styling</SelectItem>
          <SelectItem value="d">Wayfinding</SelectItem>
          <SelectItem value="e">Other</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}
