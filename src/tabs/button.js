class MDC_Tabs_Button extends BaseElement {
    static { Init(this,_=>_
        .tag("mdc-tabs_button")
        .content(html`
            <button -ref="button"></button>
        `)
        .style(css`
            button.activate::after {
                background-color: var(--mdc-primary);
            }
        `)
        .attr("activate","page","title","parent")
    )}
    constructor() {
        super()
        this.button.onclick = ()=>{ this.parent.page = this.page }
    }
    titleAttr(val) {
        this.button.innerText = val
    }
    activateAttr(val) {
        if (val) this.button.classList.add("activate")
        else this.button.classList.remove("activate")
    }
}
