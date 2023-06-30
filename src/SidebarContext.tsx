import { ReactNode, createContext, useState } from "react";

type SidebarContextType = {
  show: boolean;
  setShow: () => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  show: false,
  setShow: () => {},
});

type Props = {
  children: ReactNode;
};

export const SidebarContextProvider = ({ children }: Props) => {
  const [show, setShow] = useState(false);

  const handleShowSidebar = () => {
    setShow(!show);
  };

  return (
    <SidebarContext.Provider value={{ show: show, setShow: handleShowSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
