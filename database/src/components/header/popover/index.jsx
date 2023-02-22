import * as React from "react";
import * as Popover from "@radix-ui/react-popover";

export const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className="text-white font-open font-light text-xl py-4">
      About Us
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="text-white">
        Ebalo opusti
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
