import React, {useEffect, useState} from "react";

interface RouteProps {
    component?: React.ReactNode;
    path?: string;
}

interface RouterProps {
    children: React.ReactNode;
}

export function Route({path,component}:RouteProps){
    return <>
        {window.location.pathname === path && component}
    </>
}

export function Router({children}:RouterProps){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    },[])
    return <>
        {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.props.path === currentPath) {
                return child;
            }
            return null;
        })}
    </>
}
