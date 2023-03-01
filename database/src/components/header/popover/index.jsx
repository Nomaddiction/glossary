import * as React from "react";
import * as RPopover from "@radix-ui/react-popover";
import styles from "./popover.module.scss";

export const Popover = () => (
  <RPopover.Root>
    <RPopover.Trigger className={styles.trigger}>About Us</RPopover.Trigger>
    <RPopover.Portal>
      <RPopover.Content className={styles.content}>
        Ebalo opusti
        <RPopover.Arrow className={styles.arrow} />
      </RPopover.Content>
    </RPopover.Portal>
  </RPopover.Root>
);
