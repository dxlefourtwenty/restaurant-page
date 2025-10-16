const PageModule = (() => {
    function hidePage(page) {
        page.classList.add("hidden");
    }

    function showPage(page) {
        page.classList.remove('hidden');
    }

    return {
        hidePage,
        showPage
    };

})();

export default PageModule;