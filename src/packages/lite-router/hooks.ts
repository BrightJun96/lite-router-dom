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
