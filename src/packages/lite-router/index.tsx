import React, {useEffect} from "react";

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
    useEffect(() => {
        const onLocationChange = () => {
            console.log("location changed");
        };

        // popstate 이벤트를 감지하여 경로가 변경되었을 때 상태 업데이트
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return <>
        {children}
    </>
}
