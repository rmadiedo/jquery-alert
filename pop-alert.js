;(function($) {
    $.fn.popAlert = function (opts) {
        const options = $.extend({}, $.fn.popAlert.defaults, opts);
        return this.each(function() {
            const lowerLine = getLowerLine(options);
            const html = `
            <div id="alert-container" class="container alert-width alert-positioning">
                <div class="alert alert-${options.class} alert-dismissible fade show shadow" role="alert">
                    <${options.headerElement} class="alert-heading" id="alert-container-header">
                        ${options.title}
                    </${options.headerElement}><span><button class="btn-close" data-bs-dismiss="alert"></button></span>
                    <small>${options.upperLineMessage}</small>${lowerLine}
                </div>
            </div>`;
            $("#alert-container").remove();
            $("body").append(html);
        });
    }
    function getLowerLine(options) {
        if (options.lowerLineMessage != null && options.link != null && options.linkLabel != null)
            return `<hr/>${options.lowerLineMessage} <a href=${options.link} class="alert-link">${options.linkLabel}</a>`;
        else if (options.lowerLineMessage == null && options.link != null && options.linkLabel != null)
            return `<hr/><a href=${options.link} class="alert-link">${options.linkLabel}</a>`;
        else if (options.lowerLineMessage != null)
            return `<hr/>${options.lowerLineMessage}`;
        else
            return "";
    }
    $.fn.popAlert.defaults = {
        class: "success",
        headerElement: "h5",
        size: "medium",
        title: "Well Done!",
        upperLineMessage: "Good job",
        lowerLineMessage: null,
        link: null,
        linkLabel: null
    }
})(jQuery);
