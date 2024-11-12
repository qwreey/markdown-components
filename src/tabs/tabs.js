class MDC_Tabs extends BaseElement {
    static { Init(this,_=>_
        .tag("mdc-tabs")
        .content(html`
            <div -ref="list" id="mdc-tab_list">
            </div>
            <div id="mdc-tab_content">
                <slot></slot>
            </div>
        `)
        .attr("page")
    )}
    constructor() {
        super()
        this.tabs = new Map()
    }
    defaultSlot(contents) {
        for (const [index, content] of contents.filter(e=>e instanceof MDC_Tabs_Content).entries()) {
            content.open = index == this.page

            // Create button
            if (!this.tabs.has(content)) {
                this.tabs.set(content, new MDC_Tabs_Button({
                    title: content.title,
                    parent: this,
                }))
            }

            this.tabs.get(content).page = index
        }
        this.list.replaceChildren(...contents.map(e=>this.tabs.get(e)))
    }

    // Set page
    pageAttr(page) {
        for (const [content, button] of this.tabs.entries()) {
            button.activate = content.open = button.page == page
        }
    }
}
