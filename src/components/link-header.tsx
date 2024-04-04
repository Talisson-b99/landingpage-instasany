import { ComponentProps } from "react";

type LinkHeaderProps = ComponentProps<"a">;

const LinkHeader = (props: LinkHeaderProps) => {
  return (
    <a
      {...props}
      className="text-white/40 font-medium text-sm cursor-pointer transition-all duration-300 hover:text-white/70"
    ></a>
  );
};

export default LinkHeader;
