class MDC_Tabs_Content extends BaseElement {
    static { Init(this,_=>_
        .tag("mdc-tabs_content")
        .content(html`
            <div><slot></slot></div>
        `)
        .style(css`
            div {
                animation: fadeEffect 0.5s;
            }
            @keyframes fadeEffect {
                from {opacity: 0;}
                to {opacity: 1;}
            }
        `)
        .attr("open","title")
        .finalize()
    )}
    constructor() {
        super()
    }
    openAttr(val) { this.style.display = val ? "block" : "none" }
}
