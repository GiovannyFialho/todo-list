import "styled-components";

import { defaultTheme } from "@/styles/theme/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  /*
   * DefaultTheme -> Ele é a tipagem do styled components
   */

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
