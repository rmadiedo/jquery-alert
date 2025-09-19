/*
*  Work in progress
*/
;(function($) {
    $.fn.popConfirm = function (opts) {
        const options = $.extend({}, $.fn.popConfirm.defaults, opts);
        return this.each(function() {
            const confirmHtml = `
            <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="confirm-container">
              <div class="modal-dialog" role="document">
                <div class="modal-content rounded-3 shadow">
                  <div class="modal-body p-4 text-center">
                    <h5 class="mb-0">${options.title}</h5>
                    <p class="mb-0">${options.message}</p>
                  </div>
                  <div class="modal-footer flex-nowrap p-0">
                    <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end"><strong>Yes, enable</strong></button>
                    <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal">No thanks</button>
                  </div>
                </div>
              </div>
            </div>`;
            $("#confirm-container").remove();
            $("body").append(confirmHtml);
        });
    }
    $.fn.popConfirm.defaults = {
        title: "Enable this setting?",
        message: "You can always change your mind in your accounts settings",
        confirmLabel: "Yes, enable",
        cancelLabel: "No thanks"
    }
})(jQuery);
