# lite-router-dom
react-router-dom과 같이 구현

## 개발 서버 시작
yarn dev

## Example
```tsx
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Router>
          <Route
          path={"/"}
          component={<App/>}
          />
          <Route
          path={"/foo"}
          component={<Foo/>}
          />
      </Router>
  </React.StrictMode>
);
```

## 컴포넌트 및 훅

### Router 컴포넌트
Router 컴포넌트로 하위 Route 컴포넌트를 감싸줍니다. 변경되는 경로에 알맞는 컴포넌트가 할당되도록 해줍니다.
```ts

interface RouterProps {
    children: React.ReactNode;
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
```

### Route 컴포넌트
경로에 맞는 컴포넌트가 나타나게 해줍니다.
```ts

interface RouteProps {
    component?: React.ReactNode;
    path?: string;
}

export function Route({path,component}:RouteProps){
    return <>
        {window.location.pathname === path && component}
    </>
}
```

### useNavigate Hook
입력한 경로로 이동하게 해줍니다.

```ts
export function useNavigate() {

     function navigate(to: string) {
        window.history.pushState({}, "", to);
         /**
          * popstate 이벤트를 수동으로 발생
          */
         const navEvent = new PopStateEvent("popstate");
         window.dispatchEvent(navEvent);

    }

    return navigate;

}
```
