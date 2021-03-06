function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row content-container animated slideInLeft\">\r\n\r\n    <div class=\"col-xl-6 mt-2\">\r\n\r\n        <div class=\"row p-3\">\r\n\r\n            <div class=\"col-xl-12\">\r\n\r\n                <mdb-card class=\"p-4\">\r\n                    <div class=\"view rgba-white-slight waves-light mx-auto\" mdbWavesEffect>\r\n                        <img src=\"assets/image/avatar2.png\" height=\"150\" width=\"150\">\r\n                    </div>\r\n                    <mdb-card-body>\r\n                        <div class=\"md-form mb-1\">\r\n                            <mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\r\n                            <input value=\"{{ user.firstname }}\" pattern=\"[^/0-9!@#$%^&*(){}|;,/]*\" type=\"text\" class=\"form-control text-dark\"mdbInput readonly>\r\n                            <label for=\"Firstname\">Firstname</label>\r\n                        </div>\r\n\r\n                        <div class=\"md-form mb-1\">\r\n                            <mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\r\n                            <input value=\"{{ user.middlename }}\" pattern=\"[^/0-9!@#$%^&*(){}|;,/]*\" type=\"text\" class=\"form-control text-dark\" mdbInput readonly>\r\n                            <label for=\"Middlename\">Middlename</label>\r\n                        </div>\r\n\r\n                        <div class=\"md-form mb-1\">\r\n                            <mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\r\n                            <input value=\"{{ user.lastname }}\" pattern=\"[^/0-9!@#$%^&*(){}|;,/]*\" type=\"text\" class=\"form-control text-dark\" mdbInput readonly>\r\n                            <label for=\"Lastname\">Lastname</label>\r\n                        </div>\r\n\r\n                        <div class=\"md-form mb-1\">\r\n                            <mdb-icon fas icon=\"mobile-alt\" class=\"prefix grey-text\"></mdb-icon>\r\n                            <input value=\"{{ user.phone }}\" pattern=\"[/0-9/]*\" type=\"text\" class=\"form-control text-dark\"  mdbInput readonly>\r\n                            <label for=\"Phone\">Phone</label>\r\n                        </div>\r\n\r\n                        <div class=\"md-form mb-1\">\r\n                            <mdb-icon fas icon=\"envelope\" class=\"prefix grey-text\"></mdb-icon>\r\n                            <input value=\"{{ user.email }}\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]*\" type=\"text\" class=\"form-control text-dark\" mdbInput readonly>\r\n                            <label for=\"Email\">Email</label>\r\n                        </div>\r\n\r\n                        <div class=\"row mt-4\">\r\n                            <div class=\"col-xl-4 mt-1\">\r\n                                <button mdbBtn type=\"button\" color=\"deep-orange\" block=\"true\" (click)=\"editUser(); editUserModal.show()\" mdbWavesEffect>EDIT</button>\r\n                            </div>\r\n                           \r\n                        </div>\r\n                    </mdb-card-body>\r\n                </mdb-card>\r\n           </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-6 mt-2\">\r\n        <div class=\"row p-3\">\r\n\r\n            <div class=\"col-xl-12\">\r\n\r\n                <mdb-card class=\"p-4\">\r\n                    <mdb-card-body>\r\n                        <mdb-card-title>\r\n                            <h4 class=\"mb-3\">Haircut History</h4>\r\n                        </mdb-card-title>\r\n                        <table mdbTable #tableEl=\"mdbTable\" class=\"z-depth-1\" small=\"true\">\r\n                            <thead class=\"bg-dark text-light\">\r\n                                <tr>\r\n                                    <th *ngFor=\"let head of headElements; let i = index\" scope=\"col\">{{head}}</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let haircut of haircuts; let i = index\" class=\"hand-on-hover\" (click)=\"getStyle(haircut.style_id._id); styleBooking.show()\">\r\n                                    <th *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\" scope=\"row\"><a type=\"button\">{{ haircut.style_id.name }}</a></th>\r\n                                    <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{ haircut.reservation_date | date:'shortDate' }}</td>\r\n                                    <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{ haircut.status }}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot class=\"grey lighten-5 w-100\">\r\n                                <tr>\r\n                                    <td colspan=\"12\">\r\n                                    <mdb-table-pagination [tableEl]=\"tableEl\" [searchDataSource]=\"haircuts\"></mdb-table-pagination>\r\n                                </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </mdb-card-body>\r\n                </mdb-card>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- Show history modal -->\r\n<div mdbModal #styleBooking=\"mdbModal\" class=\"modal fade bg-unique text-light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"styleBookingLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg bg-unique-dark\" role=\"document\">\r\n        <div class=\"modal-content bg-unique-dark\">\r\n            <div class=\"modal-header bg-unique-dark\">\r\n                <h5 class=\"modal-title\" id=\"styleBookingLabel\">Our Style</h5>\r\n                <button type=\"button\" class=\"close text-light\" (click)=\"styleBooking.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"modal-body bg-unique-dark\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-12\">\r\n                                <img class=\"img-fluid animated zoomIn\" src=\"assets/image/{{style.image}}\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-12 modalContentTitle\">\r\n                                <h2>{{style.name}}</h2>\r\n                                <hr class=\"bg-amber\">\r\n                                <p class=\"paragraph\" data-text=\"It's a way to stay cool while looking good.\">It's a way to stay cool while looking good.</p>\r\n                                <form #bookingForm=\"ngForm\" class=\"mt-3\">\r\n                                    <h4>Book Now</h4>\r\n                                    <hr class=\"bg-amber mb-5\">\r\n                                    <div class=\"md-form\">\r\n                                        <mdb-icon far icon=\"calendar-alt\"></mdb-icon>\r\n                                        <input (change)=\"getReservationDate();\" mdbInput type=\"date\" #date=\"ngModel\" [(ngModel)]=\"bookingdate\" name=\"bookingdate\" class=\"form-control text-light\" placeholder=\"\" [class.invalid]=\"date.invalid && date.touched\" required>\r\n                                        <span *ngIf=\"date.invalid && date.touched\" class=\"text-danger\">Required Field</span><label for=\"bookingdate\" class=\"text-light\">Date</label>\r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"date.valid\">\r\n                                        <mdb-icon far icon=\"clock\"></mdb-icon>\r\n                                        <label for=\"bookingtime\">Time</label>\r\n                                        <select  #time=\"ngModel\" [(ngModel)]=\"bookingtime\" name =\"bookingtime\" class=\"form-control text-light bg-unique-dark\" [class.invalid]=\"time.invalid && time.touched\" required>\r\n                                                <option *ngFor=\"let row of reservationTime; index as i\" value=\"{{row}}\">{{row}}</option>\r\n                                        </select>\r\n                                        <span *ngIf=\"time.invalid && time.touched\" class=\"text-danger\">Required Field</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"md-form\">\r\n                                        <button class=\"btn btn-block bg-amber text-light mt-1\" type=\"button\" (click)=\"bookingConfirmModal.show()\" [disabled]=\"bookingForm.invalid\">BOOK AGAIN</button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Booking confirm modal -->\r\n<div mdbModal #bookingConfirmModal=\"mdbModal\" class=\"modal fade left\" id=\"bookingConfirmModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\r\n    <div class=\"modal-dialog modal-frame modal-top modal-notify modal-info\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header text-center bg-info\">\r\n                Please confirm to proceed booking\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bookingConfirmModal.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-footer d-flex justify-content-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-6\">\r\n                        <button (click)=\"bookingConfirmModal.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>CANCEL</button>\r\n                    </div>\r\n                    <div class=\"col-xl-6\">\r\n                        <button (click)=\"submitBooking(); bookingConfirmModal.hide(); bookingNotify.show(); styleBooking.hide()\" mdbBtn color=\"amber\" class=\"waves-light\" mdbWavesEffect>CONFIRM</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Booking notify modal -->\r\n<div mdbModal #bookingNotify=\"mdbModal\" class=\"modal fade right\" id=\"bookingNotifyTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header text-center bg-info\">\r\n                Booking Successful\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bookingNotify.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-footer d-flex justify-content-center\">\r\n                <button (click)=\"bookingNotify.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>OK</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Edit user modal -->\r\n<div mdbModal #editUserModal=\"mdbModal\" class=\"modal fade top bg-unique text-light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog bg-unique-dark\" role=\"document\">\r\n        <div class=\"modal-content bg-unique-dark\">\r\n            <div class=\"modal-header bg-unique-dark\">\r\n                <h4 class=\"modal-title w-100 font-weight-bold\">Update Information</h4>\r\n                <button type=\"button\" class=\"close text-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"editUserModal.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body mx-3 bg-unique-dark\">\r\n                <form>\r\n                    <div class=\"md-form mb-5\">\r\n                        <mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\r\n                        <input pattern=\"[^/0-9!@#$%^&*(){}|;,/]*\" type=\"text\" class=\"form-control text-light\" #editfirstname=\"ngModel\" name=\"editFirstname\" [(ngModel)]=\"editFirstname\" mdbInput required>\r\n                        <label for=\"editFirstname\">Firstname</label>\r\n                        <mdb-error *ngIf=\"editfirstname.invalid && (editfirstname.dirty || editfirstname.touched)\">Input format</mdb-error>\r\n                    </div>\r\n                    <div class=\"md-form mb-5\">\r\n                        <mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\r\n                        <input pattern=\"[^/0-9!@#$%^&*(){}|;,/]*\" type=\"text\" class=\"form-control text-light\" #editmiddlename=\"ngModel\" name=\"editMiddlename\" [(ngModel)]=\"editMiddlename\" mdbInput required>\r\n                        <label for=\"editMiddlename\">Middlename</label>\r\n                        <mdb-error *ngIf=\"editmiddlename.invalid && (editmiddlename.dirty || editmiddlename.touched)\">Input format</mdb-error>\r\n                    </div>\r\n                    <div class=\"md-form mb-5\">\r\n                        <mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\r\n                        <input pattern=\"[^/0-9!@#$%^&*(){}|;,/]*\" type=\"text\" class=\"form-control text-light\" #editlastname=\"ngModel\" name=\"editLastname\" [(ngModel)]=\"editLastname\" mdbInput required>\r\n                        <label for=\"editLastname\">Lastname</label>\r\n                        <mdb-error *ngIf=\"editlastname.invalid && (editlastname.dirty || editlastname.touched)\">Input format</mdb-error>\r\n                    </div>\r\n                    <div class=\"md-form mb-5\">\r\n                        <mdb-icon fas icon=\"mobile-alt\" class=\"prefix grey-text\"></mdb-icon>\r\n                        <input pattern=\"[/0-9/]*\" type=\"text\" class=\"form-control text-light\" #editphone=\"ngModel\" name=\"editPhone\" [(ngModel)]=\"editPhone\" maxlength=\"11\" placeholder=\"Ex. 09191234567\" mdbInput required>\r\n                        <label for=\"editPhone\">Phone</label>\r\n                        <mdb-error *ngIf=\"editphone.invalid && (editphone.dirty || editphone.touched)\">Input phone format</mdb-error>\r\n                    </div>\r\n                    <div class=\"md-form mb-5\">\r\n                        <mdb-icon fas icon=\"envelope\" class=\"prefix grey-text\"></mdb-icon>\r\n                        <input pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]*\" type=\"text\" class=\"form-control text-light\" #editemail=\"ngModel\" name=\"editEmail\" [(ngModel)]=\"editEmail\" placeholder=\"Ex. guest@email.com\" mdbInput required>\r\n                        <label for=\"editEmail\">Email</label>\r\n                        <mdb-error *ngIf=\"editemail.invalid && (editemail.dirty || editemail.touched)\">Input email format</mdb-error>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-6\">\r\n                            <button type=\"button\" mdbBtn color=\"blue-grey\" (click)=\"editUserModal.hide()\" class=\"waves-light d-flex justify-content-center\" block=\"true\" mdbWavesEffect>CANCEL</button>\r\n                        </div>\r\n                        <div class=\"col-xl-6\">\r\n                            <button type=\"button\" mdbBtn color=\"amber\" (click)=\"confirmUpdateModal.show()\" class=\"waves-light d-flex justify-content-center\" block=\"true\" mdbWavesEffect>UPDATE</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Update user confirm modal -->\r\n<div mdbModal #confirmUpdateModal=\"mdbModal\" class=\"modal fade left\" id=\"confirmUpdateModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\r\n    <div class=\"modal-dialog modal-frame modal-top modal-notify modal-info\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header text-center bg-warning\">\r\n                Confirm to save changes\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"confirmUpdateModal.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-footer d-flex justify-content-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-6\">\r\n                        <button (click)=\"confirmUpdateModal.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>CANCEL</button>\r\n                    </div>\r\n                    <div class=\"col-xl-6\">\r\n                        <button (click)=\"updateUser(); confirmUpdateModal.hide(); userUpdatedNotify.show(); editUserModal.hide()\" mdbBtn color=\"amber\" class=\"waves-light\" mdbWavesEffect>UPDATE</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Update user notify modal -->\r\n<div mdbModal #userUpdatedNotify=\"mdbModal\" class=\"modal fade right\" id=\"userUpdatedNotifyTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header text-center bg-info\">\r\n                Account information has been updated\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"userUpdatedNotify.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-footer d-flex justify-content-center\">\r\n                <button (click)=\"userUpdatedNotify.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>OK</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<!--Navbar-->\n\t\t<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark\" class=\"fixed-top bg-amber\" [containerInside]=\"false\">\n\n\t\t\t<!-- Navbar brand -->\n\t\t\t<mdb-navbar-brand><a class=\"navbar-brand animated bounce infinite\" routerLink=\"/home\"><img src=\"assets/image/logo.png\" height=\"50\"></a></mdb-navbar-brand>\n\n\t\t\t<links *ngIf=\"loggedIn; else guestBlock\">\n\n\t\t\t\t<ul class=\"navbar-nav mr-auto\" *ngIf=\"user.role == 'client'; else adminBlock\">\n\t\t\t\t\t<li class=\"nav-item py-1\">\n\t\t\t\t\t\t<a routerLink=\"/home\" class=\"text-decoration-none pr-4 linkHover\" routerLinkActive=\"linkActive\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item py-1\">\n\t\t\t\t\t\t<a routerLink=\"/styles\" class=\"text-decoration-none pr-4 linkHover\" routerLinkActive=\"linkActive\">Styles</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ng-template #adminBlock>\n\t\t\t\t\t<ul class=\"navbar-nav mr-auto\">\n\t\t\t\t\t\t<li class=\"nav-item py-1\">\n\t\t\t\t\t\t\t<a routerLink=\"/dashboard\" class=\"text-decoration-none pr-4 linkHover\" routerLinkActive=\"linkActive\">Dashboard</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"nav-item py-1\">\n\t\t\t\t\t\t\t<a routerLink=\"/users\" class=\"text-decoration-none pr-4 linkHover\" routerLinkActive=\"linkActive\">Clients</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"nav-item py-1\">\n\t\t\t\t\t\t\t<a routerLink=\"/reservations\" class=\"text-decoration-none pr-4 linkHover\" routerLinkActive=\"linkActive\">Haircuts</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</ng-template>\n\n\t\t\t\t<ul class=\"navbar-nav ml-auto nav-flex-icons mr-4\">\n\t\t\t\t\t<li class=\"nav-item dropdown\" dropdown>\n\t\t\t\t\t\t<a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n\t\t\t\t\t\t\t{{ user.firstname }} {{ user.lastname }}<span class=\"caret\"></span></a>\n\t\t\t\t\t\t<div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n\t\t\t\t\t\t\t<a routerLink=\"/account\" class=\"dropdown-item waves-light text-decoration-none\">Account Settings</a>\n\t\t\t\t\t\t\t<a type=\"button\" class=\"dropdown-item waves-light text-decoration-none\" (click)=\"logOut()\">Logout</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</links>\n\n\t\t\t<ng-template #guestBlock>\n\t\t\t\t<links>\n\t\t\t\t\t<ul class=\"navbar-nav mr-auto\">\n\t\t\t\t\t\t<li class=\"nav-item py-1\">\n\t\t\t\t\t\t\t<a routerLink=\"/home\" class=\"text-decoration-none pr-4 linkHover\" routerLinkActive=\"linkActive\">Home</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"nav-item py-1\">\n\t\t\t\t\t\t\t<a routerLink=\"/styles\" class=\"text-decoration-none pr-4 linkHover\" routerLinkActive=\"linkActive\">Styles</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<ul class=\"navbar-nav ml-auto nav-flex-icons mr-4\">\n\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t<a class=\"text-decoration-none\" (click)=\"loginModal.show()\"><span class=\"loginBtn\">Login</span></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</links>\n\t\t\t</ng-template>\n\t  \t</mdb-navbar>\n\t</div>\n<router-outlet></router-outlet>\n</div>\n\n<!-- Log in Modal -->\n<div mdbModal style=\"overflow-y: auto\" #loginModal=\"mdbModal\" class=\"modal fade top bg-unique\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-lg cascading-modal modal-avatar\" role=\"document\">\n\t\t<div class=\"modal-content bg-unique-dark\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<img src=\"assets/image/Medium Length Haircut + Mid Fade.jpg\" class=\"rounded-circle img-responsive animated zoomIn\">\n\t\t\t\t<h3 class=\"text-light\">Login</h3>\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-body p-5 bg-unique-dark text-light\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xl-6 border-right mt-3\">\n\t\t\t\t\t\t<p>You can also sign in with:</p>\n\t\t\t\t\t\t<button id=\"fbLoginBtn\" type=\"button\" mdbBtn color=\"primary\" class=\"waves-light btn-sm btn-block\" mdbWavesEffect><i class=\"fab fa-facebook-f left\"></i>Facebook</button>\n\t\t\t\t\t\t<button id=\"googleLoginBtn\" type=\"button\" mdbBtn gradient=\"peach\" class=\"waves-light btn-sm btn-block mt-3\" mdbWavesEffect><i class=\"fab fa-google left\"></i>Google</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t\t\t<form (submit)=\"login()\" #loginForm=\"ngForm\">\n\t\t\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t\t\t<mdb-icon far icon=\"envelope animated zoomIn\" ></mdb-icon>\n\t\t\t\t\t\t\t\t<input mdbInput type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]*\" #email=\"ngModel\" [(ngModel)]=\"userEmail\"  name=\"userEmail\" class=\"form-control text-light\" [class.invalid]=\"email.invalid && email.touched\" maxlength=\"30\" required>\n\t\t\t\t\t\t\t\t<span *ngIf=\"email.invalid && email.touched\" class=\"text-danger\">Invalid Email</span><label for=\"userEmail\">Email</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t\t\t\t<mdb-icon fas icon=\"key animated zoomIn\"></mdb-icon>\n\t\t\t\t\t\t\t\t\t<input mdbInput type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userPassword\" name=\"userPassword\" class=\"form-control text-light\" [class.invalid]=\"password.invalid && password.touched\" maxlength=\"20\" required>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"password.invalid && password.touched\" class=\"text-danger\">Invalid Password</span><label for=\"userPassword\">Password</label>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<button id=\"loginBtn\" class=\"btn btn-block btn-sm bg-amber text-light\" type=\"submit\" [disabled]=\"loginForm.invalid\">Login</button>\n\t\t\t\t\t\t\t<div class=\"row mt-2\">\n\t\t\t\t\t\t\t\t<div class=\"col-xl-6\"><a type=\"button\" class=\"text-primary\">Forgot Password?</a></div>\n\t\t\t\t\t\t\t\t<div class=\"col-xl-6\"><a type=\"button\" (click)=\"loginModal.hide(); registerModal.show()\" class=\"float-right text-primary\">Create Account</a></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n\n\n<!-- Register Modal -->\n<div style=\"overflow-y: auto\" mdbModal #registerModal=\"mdbModal\" class=\"modal fade bottom bg-unique\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"registerModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-lg cascading-modal modal-avatar\" role=\"document\">\n\t\t<div class=\"modal-content bg-unique-dark\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<img src=\"assets/image/Medium Length Haircut + Mid Fade.jpg\" class=\"rounded-circle img-responsive animated zoomIn\">\n\t\t\t\t<h3 class=\"text-light\">Register</h3>\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-body px-5 bg-unique-dark text-light\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<form (submit)=\"addUser()\" #registrationForm=\"ngForm\" class=\"col-xl-12 text-light\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xl-12 mx-auto\">\n\t\t\t\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t\t\t\t<mdb-icon fas icon=\"user animated zoomIn\"></mdb-icon>\n\t\t\t\t\t\t\t\t\t<input mdbInput type=\"text\" pattern=\"[A-Za-z\\s.]*\" #newuserfirstname=\"ngModel\" [(ngModel)]=\"registerFirstname\"  name=\"registerFirstname\" class=\"form-control text-light\" [class.invalid]=\"newuserfirstname.invalid && newuserfirstname.touched\" maxlength=\"50\" required>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"newuserfirstname.invalid && newuserfirstname.touched\" class=\"text-danger\">Invalid format</span><label for=\"newuserfirstname\">Firstname</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t\t\t\t<mdb-icon fas icon=\"user  animated zoomIn\"></mdb-icon>\n\t\t\t\t\t\t\t\t\t<input mdbInput type=\"text\" pattern=\"[A-Za-z\\s.]*\" #newusermiddlename=\"ngModel\" [(ngModel)]=\"registerMiddlename\"  name=\"registerMiddlename\" class=\"form-control text-light\" [class.invalid]=\"newusermiddlename.invalid && newusermiddlename.touched\" maxlength=\"50\" required>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"newusermiddlename.invalid && newusermiddlename.touched\" class=\"text-danger\">Invalid format</span><label for=\"newusermiddlename\">Middlename</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t\t\t\t<mdb-icon fas icon=\"user  animated zoomIn\"></mdb-icon>\n\t\t\t\t\t\t\t\t\t<input mdbInput type=\"text\" pattern=\"[A-Za-z\\s.]*\" #newuserlastname=\"ngModel\" [(ngModel)]=\"registerLastname\"  name=\"registerLastname\" class=\"form-control text-light\" [class.invalid]=\"newuserlastname.invalid && newuserlastname.touched\" maxlength=\"50\" required>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"newuserlastname.invalid && newuserlastname.touched\" class=\"text-danger\">Invalid format</span><label for=\"newuserlastname\">Lastname</label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t\t\t\t<mdb-icon fas icon=\"mobile-alt animated zoomIn\"></mdb-icon>\n\t\t\t\t\t\t\t\t\t<input mdbInput type=\"text\" pattern=\"[0-9]*\" #newuserphone=\"ngModel\" [(ngModel)]=\"registerPhone\"  name=\"registerPhone\" class=\"form-control text-light\" [class.invalid]=\"newuserphone.invalid && newuserphone.touched\" maxlength=\"11\" required>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"newuserphone.invalid && newuserphone.touched\" class=\"text-danger\">Invalid phone format</span><label for=\"newuserphone\">Phone</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t\t\t\t<mdb-icon far icon=\"envelope animated zoomIn\"></mdb-icon>\n\t\t\t\t\t\t\t\t\t<input mdbInput type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]*\" #newuseremail=\"ngModel\" [(ngModel)]=\"registerEmail\"  name=\"registerEmail\" class=\"form-control text-light\" [class.invalid]=\"newuseremail.invalid && newuseremail.touched\" maxlength=\"30\" required>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"newuseremail.invalid && newuseremail.touched\" class=\"text-danger\">Invalid email format</span><label for=\"newuseremail\">Email</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t\t\t\t<mdb-icon fas icon=\"key animated zoomIn\"></mdb-icon>\n\t\t\t\t\t\t\t\t\t<input mdbInput pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" type=\"password\" #newuserpassword=\"ngModel\" [(ngModel)]=\"registerPassword\"  name=\"registerPassword\" class=\"form-control text-light\" [class.invalid]=\"newuserpassword.invalid && newuserpassword.touched\" maxlength=\"20\" required>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"newuserpassword.invalid && newuserpassword.touched\" class=\"text-danger\">Must contain at least one number and one uppercase and lowercase letter, and at least 8 to 20 characters</span><label for=\"newuserpassword\">Password</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t\t\t\t\t<mdb-icon fas icon=\"check-circle animated zoomIn\"></mdb-icon>\n\t\t\t\t\t\t\t\t\t\t<input mdbInput type=\"password\" #verifypassword=\"ngModel\" [(ngModel)]=\"verifyregpassword\"  name=\"verifyregpassword\" class=\"form-control text-light\" [class.invalid]=\"verifypassword.invalid && verifypassword.touched\" maxlength=\"20\" required>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"registerPassword != verifyregpassword && verifypassword.touched\" class=\"text-danger\">Passwords do not match</span>\n\t\t\t\t\t\t\t\t\t\t<label for=\"verifyregpassword\">Confirm Password</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t\t\t\t<button id=\"registerBtn\" class=\"btn btn-block btn-sm py-3 bg-amber text-light\" type=\"submit\" [disabled]=\"registrationForm.invalid\" (click)=\"registerNotify.show()\">Register</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Registration notify modal -->\n<div mdbModal #registerNotify=\"mdbModal\" class=\"modal fade right\" id=\"registerNotifyTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header text-center bg-info\">\n\t\t\t\t\tRegistration Successful\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bookingNotify.hide()\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer d-flex justify-content-center\">\n\t\t\t\t\t<button (click)=\"registerNotify.hide()\" (click) =\"registerModal.hide()\" (click) =\"loginModal.show()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>Continue</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n<footer class=\"page-footer font-small bg-amber darken-3\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12 py-5\">\n\t\t\t\t<div class=\"mb-5 flex-center\">\n\t\t\t\t\t<a class=\"fb-ic\">\n\t\t\t\t\t\t<mdb-icon fab icon=\"facebook\" size=\"2x\" class=\"white-text mr-md-5 mr-3\"></mdb-icon>\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a class=\"tw-ic\">\n\t\t\t\t\t\t<mdb-icon fab icon=\"twitter\" size=\"2x\" class=\"white-text mr-md-5 mr-3\"></mdb-icon>\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a class=\"gplus-ic\">\n\t\t\t\t\t\t<mdb-icon fab fab icon=\"google-plus\" size=\"2x\" class=\"white-text mr-md-5 mr-3\"></mdb-icon>\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a class=\"li-ic\">\n\t\t\t\t\t\t<mdb-icon fab icon=\"linkedin\" size=\"2x\" class=\"white-text mr-md-5 mr-3\"></mdb-icon>\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a class=\"ins-ic\">\n\t\t\t\t\t\t<mdb-icon fab icon=\"instagram\" size=\"2x\" class=\"white-text mr-md-5 mr-3\"></mdb-icon>\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a class=\"pin-ic\">\n\t\t\t\t\t\t<mdb-icon fab icon=\"pinterest\" size=\"2x\" class=\"white-text mr-md-5 mr-3\"></mdb-icon>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"footer-copyright text-center py-3\">&copy; Men's Barber 2019 Copyright:\n\t\t<a href=\"#\">Project:ZeroW Devs</a>\n\t</div>\n</footer>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"content\" class=\"row animated slideInLeft\">\n\n  <div class=\"col-lg-12 row \">\n\n      <div class=\"col-lg-3 p-3\">\n          <mdb-card cascade=\"true\" class=\"cascading-admin-card\">\n\n              <!--Card Data-->\n              <div class=\"row col-lg-12\">\n                  <div class=\"col-lg-12\">\n                      <div class=\"col-lg-4 p-2 float-left primary-color text-light shadow-lg\">\n                          <mdb-icon fas icon=\"cut\" class=\"fa-2x\" ></mdb-icon>\n                      </div>\n\n                        <div class=\"col-lg-8 p-3 float-right\">\n                            <p class=\"text-muted\">Styles</p>\n                            <h3><strong>{{styles.length}}</strong></h3>\n                        </div>\n                  </div>\n              </div>\n              <!--/.Card Data-->\n\n              <!--Card content-->\n              <mdb-card-body>\n                  <div class=\"progress\">\n                      <div class=\"progress-bar bg-primary\" role=\"progressbar\" [style.width]=\"styles.length + '%' \" aria-valuenow=\"25\"\n                           aria-valuemin=\"0\" aria-valuemax=\"100\">{{styles.length}}</div>\n                  </div>\n                  <!--Text-->\n                  <p class=\"card-text\">Better than last week (25%)</p>\n              </mdb-card-body>\n              <!--/.Card content-->\n\n          </mdb-card>\n      </div>\n\n      <div class=\"col-lg-3 p-3\">\n          <mdb-card cascade=\"true\" class=\"cascading-admin-card\">\n\n              <!--Card Data-->\n              <div class=\"row col-lg-12\">\n                  <div class=\"col-lg-12 \">\n                      <div class=\"col-lg-4 p-2 float-left primary-color text-light shadow-lg\">\n\n                          <mdb-icon fas icon=\"user\" class=\"fa-2x\"></mdb-icon>\n                      </div>\n\n                        <div class=\"col-lg-7 p-3 float-right\">\n                            <p class=\"text-muted\">Clients</p>\n                            <h3><strong>{{users.length}}</strong></h3>\n                        </div>\n                  </div>\n              </div>\n              <!--/.Card Data-->\n\n              <!--Card content-->\n              <mdb-card-body>\n                  <div class=\"progress\">\n                      <div class=\"progress-bar bg-primary\" role=\"progressbar\" [style.width]=\"users.length + '%' \" aria-valuenow=\"25\"\n                           aria-valuemin=\"0\" aria-valuemax=\"100\">{{users.length}}</div>\n                  </div>\n                  <!--Text-->\n                  <p class=\"card-text\">Better than last week (25%)</p>\n              </mdb-card-body>\n              <!--/.Card content-->\n\n          </mdb-card>\n      </div>\n\n      <div class=\"col-lg-3 p-3\">\n          <mdb-card cascade=\"true\" class=\"cascading-admin-card\">\n\n              <!--Card Data-->\n              <div class=\"row col-lg-12\">\n                  <div class=\"col-lg-12\">\n                      <div class=\"col-lg-4 p-2 float-left primary-color text-light shadow-lg\">\n                          <mdb-icon fas icon=\"book\" class=\"fa-2x\"></mdb-icon>\n                      </div>\n\n                        <div class=\"col-lg-8 p-3 float-right\">\n                            <p class=\"text-muted text-sm small\">Haircuts</p>\n                            <h3><strong>{{reservations.length}}</strong></h3>\n                        </div>\n                  </div>\n              </div>\n              <!--/.Card Data-->\n\n              <!--Card content-->\n              <mdb-card-body>\n                  <div class=\"progress\">\n                      <div class=\"progress-bar bg-primary\" role=\"progressbar\" [style.width]=\"reservations.length + '%' \" aria-valuenow=\"25\"\n                           aria-valuemin=\"0\" aria-valuemax=\"100\">{{reservations.length}}</div>\n                  </div>\n                  <!--Text-->\n                  <p class=\"card-text\">Better than last week (25%)</p>\n              </mdb-card-body>\n              <!--/.Card content-->\n\n          </mdb-card>\n      </div>\n\n      <div class=\"col-lg-3 p-3\">\n          <mdb-card cascade=\"true\" class=\"cascading-admin-card\">\n\n              <!--Card Data-->\n              <div class=\"row col-lg-12\">\n                  <div class=\"col-lg-12\">\n                      <div class=\"col-lg-4 p-2 float-left primary-color text-light shadow-lg\">\n                          <mdb-icon fas icon=\"calendar-day\" class=\"fa-2x\"></mdb-icon>\n                      </div>\n\n                        <div class=\"col-lg-8 p-3 float-right\">\n                            <p class=\"text-muted text-sm small\">Completed Haircuts</p>\n                            <h3><strong>{{completedreservations.length}}</strong></h3>\n                        </div>\n                  </div>\n              </div>\n              <!--/.Card Data-->\n\n              <!--Card content-->\n              <mdb-card-body>\n                  <div class=\"progress md-progress\" style=\"height: 20px\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"completedreservations.length + '%' \" style=\"height: 20px\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{completedreservations.length}}</div>\n                  </div>\n\n                  <!--Text-->\n                  <p class=\"card-text\">Better than last week (25%)</p>\n              </mdb-card-body>\n              <!--/.Card content-->\n\n          </mdb-card>\n      </div>\n\n  </div>\n\n\n  <div class=\"row col-lg-12\">\n\n      <div class=\"col-lg-6\">\n          <h4>Recently recorded haircut reservation</h4>\n          <table mdbTable #recenttable=\"mdbTable\" class=\"z-depth-1\" small=\"true\">\n              <thead class=\"black white-text\">\n                <tr>\n                  <th scope=\"col\">Client</th>\n                  <th scope=\"col\">Style</th>\n                  <th scope=\"col\">Date</th>\n                  <th scope=\"col\">Time</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr mdbTableCol *ngFor=\"let el of reservations.slice(0,5)\" class=\"hand-on-hover\">\n                  <td>{{el.client_id.firstname}} {{ el.client_id.middlename }} {{ el.client_id.lastname }}</td>\n                  <td>{{el.style_id.name}}</td>\n                  <td>{{el.reservation_date | date:'shortDate'}}</td>\n                  <td>{{el.reservation_date | date:'mediumTime'}}</td>\n                </tr>\n              </tbody>\n              <tfoot class=\"grey lighten-5 w-100\">\n                <tr>\n                    <td colspan=\"12\">\n                    <mdb-table-pagination [tableEl]=\"recenttable\" [searchDataSource]=\"reservations\"></mdb-table-pagination>\n                </td>\n                </tr>\n              </tfoot>\n            </table>\n      </div>\n\n      <div class=\"col-lg-6\">\n        <h4>Todays reservation</h4>\n        <table mdbTable #todaytable=\"mdbTable\" class=\"z-depth-1\" small=\"true\">\n          <thead class=\"black white-text\">\n            <tr>\n              <th scope=\"col\">Client</th>\n              <th scope=\"col\">Style</th>\n              <th scope=\"col\">Time</th>\n              <th scope=\"col\">Status</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr mdbTableCol *ngFor=\"let el of todaysreservations.slice(0,5)\" class=\"hand-on-hover\" (click)=\"getReservation(el._id); todayReservationModal.show()\">\n              <td>{{el.client_id.firstname}} {{ el.client_id.middlename }} {{ el.client_id.lastname }}</td>\n              <td>{{el.style_id.name}}</td>\n              <td>{{el.reservation_date | date:'mediumTime'}}</td>\n              <td>{{el.status}}</td>\n            </tr>\n          </tbody>\n          <tfoot class=\"grey lighten-5 w-100\">\n                <tr>\n                    <td colspan=\"12\">\n                    <mdb-table-pagination [tableEl]=\"todaytable\" [searchDataSource]=\"todaysreservations\"></mdb-table-pagination>\n                </td>\n                </tr>\n            </tfoot>\n        </table>\n\n      </div>\n\n     \n\n      <div class=\"row col-lg-12\">\n       \n          <div class=\"col-lg-6\">\n            <h5>Trending styles</h5>\n              <ul class=\"list-unstyled\">\n                <li *ngFor=\"let el of styles.slice(0,5)\">\n                    <p>{{el.name}}<p>\n                    <span>\n                        <span class=\"progress\">\n                            <span class=\"progress-bar bg-primary\" role=\"progressbar\" [style.width]=\"el.count + '%' \" aria-valuenow=\"el.count\"\n                                aria-valuemin=\"0\" aria-valuemax=\"100\"></span>\n                        </span>\n                        <p class=\"card-text\">Better than last week {{el.count}}</p>\n                    </span>\n                </li>\n              </ul>\n          </div>\n      </div>\n  </div>\n</div>\n\n\n<!-- Modals -->\n\n<!-- Show resevation modal -->\n<div mdbModal #todayReservationModal=\"mdbModal\" class=\"modal fade bottom bg-unique text-light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog bg-unique-dark\" role=\"document\">\n        <div class=\"modal-content bg-unique-dark\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title w-100 font-weight-bold\">Haircut Reservation Information</h4>\n                <button type=\"button\" class=\"close text-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"todayReservationModal.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body mx-3 bg-unique-dark\">\n                <form>\n                    <div class=\"md-form mb-5\">\n                        <mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\n                        <input type=\"text\" class=\"form-control text-light\" value=\"{{ reservationClient.firstname }} {{ reservationClient.middlename }} {{ reservationClient.lastname }}\" mdbInput readonly>\n                        <label>Client</label>\n                    </div>\n                    <div class=\"md-form mb-5\">\n                        <mdb-icon fas icon=\"cut\" class=\"prefix grey-text\"></mdb-icon>\n                        <input type=\"text\" class=\"form-control text-light\" value=\"{{ reservationStyle.name }}\" mdbInput readonly>\n                        <label>Style</label>\n                    </div>\n                    <div class=\"md-form mb-5\">\n                        <mdb-icon fas icon=\"calendar-alt\" class=\"prefix grey-text\"></mdb-icon>\n                        <input type=\"text\" class=\"form-control text-light\" value=\"{{ reservation.reservation_date | date:'shortDate' }}\" mdbInput readonly>\n                        <label>Date</label>\n                    </div>\n                    <div class=\"md-form mb-5\">\n                        <mdb-icon fas icon=\"clock\" class=\"prefix grey-text\"></mdb-icon>\n                        <input type=\"text\" class=\"form-control text-light\" value=\"{{ reservation.reservation_date | date:'mediumTime' }}\" mdbInput readonly>\n                        <label>Time</label>\n                    </div>\n                    <div class=\"md-form mb-5\">\n                        <mdb-icon fas icon=\"atom\" class=\"prefix grey-text\"></mdb-icon>\n                        <input type=\"text\" class=\"form-control text-light\" value=\"{{ reservation.status }}\" mdbInput readonly>\n                        <label>Status</label>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-6\" *ngIf=\"reservation.status == 'Reserved'; else elseBlock\">\n                            <button type=\"button\" mdbBtn color=\"success\" (click)=\"confirmServeModal.show();\" class=\"waves-light d-flex justify-content-center\" block=\"true\" mdbWavesEffect>SERVE</button>\n                        </div>\n                        <ng-template #elseBlock>\n                            <div class=\"col-xl-6\">\n                                <button type=\"button\" mdbBtn color=\"primary\" (click)=\"confirmCompleteModal.show();\" class=\"waves-light d-flex justify-content-center\" block=\"true\" mdbWavesEffect>COMPLETE</button>\n                            </div>\n                        </ng-template>\n                        <div class=\"col-xl-6\">\n                            <button type=\"button\" mdbBtn color=\"danger\" (click)=\"confirmServeModal.show()\" class=\"waves-light d-flex justify-content-center\" block=\"true\" mdbWavesEffect>DELETE</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Serve reservation confirm modal -->\n<div mdbModal #confirmServeModal=\"mdbModal\" class=\"modal fade left\" id=\"confirmServeModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\n    <div class=\"modal-dialog modal-frame modal-top modal-notify modal-info\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header text-center bg-warning\">\n                Confirm to start this haircut\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"confirmServeModal.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-center\">\n                <div class=\"row\">\n                    <div class=\"col-xl-6\">\n                        <button (click)=\"confirmServeModal.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>CANCEL</button>\n                    </div>\n                    <div class=\"col-xl-6\">\n                        <button (click)=\"startHaircut(); confirmServeModal.hide(); reservationServedNotify.show(); todayReservationModal.hide()\" mdbBtn color=\"amber\" class=\"waves-light\" mdbWavesEffect>START</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Served notify modal -->\n<div mdbModal #reservationServedNotify=\"mdbModal\" class=\"modal fade right\" id=\"userUpdatedNotifyTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header text-center bg-info\">\n                Haircut service started\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"reservationServedNotify.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-center\">\n                <button (click)=\"reservationServedNotify.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>OK</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div mdbModal #confirmCompleteModal=\"mdbModal\" class=\"modal fade left\" id=\"confirmCompleteModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\n    <div class=\"modal-dialog modal-frame modal-top modal-notify modal-info\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header text-center bg-warning\">\n                Confirm to complete this haircut\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"confirmCompleteModal.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-center\">\n                <div class=\"row\">\n                    <div class=\"col-xl-6\">\n                        <button (click)=\"confirmCompleteModal.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>CANCEL</button>\n                    </div>\n                    <div class=\"col-xl-6\">\n                        <button (click)=\"completeHaircut(); confirmCompleteModal.hide(); reservationServedNotify.show(); todayReservationModal.hide()\" mdbBtn color=\"amber\" class=\"waves-light\" mdbWavesEffect>START</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div mdbModal #reservationCompletedNotify=\"mdbModal\" class=\"modal fade right\" id=\"userUpdatedNotifyTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header text-center bg-info\">\n                Haircut service completed\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"reservationCompletedNotify.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-center\">\n                <button (click)=\"reservationCompletedNotify.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>OK</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-lg-12 p-0 h-100\">\n        <div class=\"floater\">\n            <h1 class=\"display-4 text-light tagline animated slideInLeft\"><strong>Our Hair Styles</strong></h1>\n            <h1 class=\"display-4 text-light tagline animated slideInRight\"><strong>Enhances your smile.</strong></h1>\n        </div>\n        <img class=\"img-fluid homeimg animated zoomIn\" src=\"assets/image/homeimg.jpg\" width=\"100%\">\n    </div>\n</div>\n\n<div class=\"row mt-3 trendingstylesRow\">\n    <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n        <h3>Trending Hairstyles</h3>\n        <hr>\n        <div class=\"row \">\n            <div class=\"col-lg-3\" *ngFor=\"let style of trendingstyles\">\n                <img src=\"assets/image/{{style.image}}\" class=\"mt-2 trendingstylesImg \" (click)=\"styleBooking.show(); getStyle(style._id);\" mdbTooltip=\"{{ style.name }}\" placement=\"top\" mdbWavesEffect>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n        <h3>Styles and Price</h3>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <ul class=\"list-unstyled\" >\n                    <li *ngFor=\"let style of styles\" class=\"text-small mt-1\">{{style.name}} <span class=\"float-right\">{{style.price}}</span></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modals -->\n\n<div mdbModal #styleBooking=\"mdbModal\" class=\"modal fade bg-unique text-light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"styleBookingLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg bg-unique-dark\" role=\"document\">\n        <div class=\"modal-content bg-unique-dark\">\n            <div class=\"modal-header bg-unique-dark\">\n                <h5 class=\"modal-title\" id=\"styleBookingLabel\">Our Style</h5>\n                <button type=\"button\" class=\"close text-light\" (click)=\"styleBooking.hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body bg-unique-dark\">\n                <div class=\"row\">\n                    <div class=\"col-xl-6\">\n                        <div class=\"row\">\n                            <div class=\"col-xl-12\">\n                                <img class=\"img-fluid animated zoomIn\" src=\"assets/image/{{style.image}}\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-6\">\n                        <div class=\"row\">\n                            <div class=\"col-xl-12 modalContentTitle\">\n                                <h2>{{style.name}}</h2>\n                                <hr class=\"bg-amber\">\n                                <p data-text=\"It's a way to stay cool while looking good. \" class=\"animated zoomIn\">It's a way to stay cool while looking good.</p>\n                                <form #bookingForm=\"ngForm\" class=\"mt-3\">\n                                    <h4>Book Now</h4>\n                                    <hr class=\"bg-amber mb-5\">\n                                    <div class=\"md-form\">\n                                        <mdb-icon far icon=\"calendar-alt\"></mdb-icon>\n                                        <input (change)=\"getReservationDate();\" mdbInput type=\"date\" #date=\"ngModel\" [(ngModel)]=\"bookingdate\" name=\"bookingdate\" class=\"form-control text-light\" placeholder=\"\" [class.invalid]=\"date.invalid && date.touched\" required>\n                                        <span *ngIf=\"date.invalid && date.touched\" class=\"text-danger\">Required Field</span><label for=\"bookingdate\" class=\"text-light\">Date</label>\n                                    </div>\n\n                                    <div *ngIf=\"date.valid\">\n                                        <mdb-icon far icon=\"clock\"></mdb-icon>\n                                        <label for=\"bookingtime\">Time</label>\n                                        <select  #time=\"ngModel\" [(ngModel)]=\"bookingtime\" name =\"bookingtime\" class=\"form-control text-light bg-unique-dark\" [class.invalid]=\"time.invalid && time.touched\" required>\n                                              <option *ngFor=\"let row of reservationTime; index as i\" value=\"{{row}}\">{{row}}</option>\n                                        </select>\n                                        <span *ngIf=\"time.invalid && time.touched\" class=\"text-danger\">Required Field</span>\n                                    </div>\n\n                                    <div class=\"md-form\">\n                                        <button class=\"btn btn-block bg-amber text-light mt-1\" type=\"button\" (click)=\"bookingConfirmModal.show()\" [disabled]=\"bookingForm.invalid\">Book</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Booking confirm modal -->\n<div mdbModal #bookingConfirmModal=\"mdbModal\" class=\"modal fade left\" id=\"bookingConfirmModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\n    <div class=\"modal-dialog modal-frame modal-top modal-notify modal-info\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header text-center bg-info\">\n                Please confirm to proceed booking\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bookingConfirmModal.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-center\">\n                <div class=\"row\">\n                    <div class=\"col-xl-6\">\n                        <button (click)=\"bookingConfirmModal.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>CANCEL</button>\n                    </div>\n                    <div class=\"col-xl-6\">\n                        <button (click)=\"submitBooking(); bookingConfirmModal.hide(); bookingNotify.show(); styleBooking.hide()\" mdbBtn color=\"amber\" class=\"waves-light\" mdbWavesEffect>CONFIRM</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Booking notify modal -->\n<div mdbModal #bookingNotify=\"mdbModal\" class=\"modal fade right\" id=\"bookingNotifyTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header text-center bg-info\">\n                Booking Successful\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bookingNotify.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-center\">\n                <button (click)=\"bookingNotify.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>OK</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagenotfoundPagenotfoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>pagenotfound works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reservations/reservations.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reservations/reservations.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReservationsReservationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row content-container animated slideInLeft\">\n    <div class=\"col-md-6\">\n        <div class=\"mt-4\">\n            <h3>Haircuts</h3>\n        </div>\n    </div>\n\n    <div class=\"col-md-3 offset-3 float-right\">\n        <div class=\"md-form\">\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control text-light\" id=\"search\" mdbInput>\n            <label for=\"search\">Search</label>\n        </div>\n    </div>\n</div>\n<table mdbTable #tableEl=\"mdbTable\" class=\"z-depth-1 animated slideInLeft\" small=\"true\">\n    <thead class=\"bg-dark text-light\">\n        <tr>\n            <th *ngFor=\"let head of headElements; let i = index\" scope=\"col\">{{head}}</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let reservation of reservations; let i = index\" (click)=\"getReservation(reservation._id); showReservationModal.show()\" class=\"hand-on-hover\">\n            <th *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\" scope=\"row\"><a type=\"button\">{{reservation.client_id.firstname}} {{ reservation.client_id.middlename }} {{ reservation.client_id.lastname }}</a></th>\n            <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"><a type=\"button\">{{reservation.style_id.name}}</a></td>\n            <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{reservation.reservation_date | date:'shortDate'}}</td>\n            <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{reservation.reservation_date | date:'mediumTime'}}</td>\n            <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{reservation.status}}</td>\n        </tr>\n    </tbody>\n    <tfoot class=\"grey lighten-5 w-100\">\n        <tr>\n            <td colspan=\"12\">\n            <mdb-table-pagination [tableEl]=\"tableEl\" [searchDataSource]=\"reservations\"></mdb-table-pagination>\n        </td>\n        </tr>\n    </tfoot>\n</table>\n\n\n<!-- Modals -->\n\n<!-- Show resevation modal -->\n<div mdbModal #showReservationModal=\"mdbModal\" class=\"modal fade bottom bg-unique text-light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog bg-unique-dark\" role=\"document\">\n        <div class=\"modal-content bg-unique-dark\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title w-100 font-weight-bold\">Haircut Reservation Information</h4>\n                <button type=\"button\" class=\"close text-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showReservationModal.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body mx-3 bg-unique-dark\">\n                <form>\n                    <div class=\"md-form mb-5\">\n                        <mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\n                        <input type=\"text\" class=\"form-control text-light\" value=\"{{ reservationClient.firstname }} {{ reservationClient.middlename }} {{ reservationClient.lastname }}\" mdbInput readonly>\n                        <label>Client</label>\n                    </div>\n                    <div class=\"md-form mb-5\">\n                        <mdb-icon fas icon=\"cut\" class=\"prefix grey-text\"></mdb-icon>\n                        <input type=\"text\" class=\"form-control text-light\" value=\"{{ reservationStyle.name }}\" mdbInput readonly>\n                        <label>Style</label>\n                    </div>\n                    <div class=\"md-form mb-5\">\n                        <mdb-icon fas icon=\"calendar-alt\" class=\"prefix grey-text\"></mdb-icon>\n                        <input type=\"text\" class=\"form-control text-light\" value=\"{{ reservation.reservation_date | date:'shortDate' }}\" mdbInput readonly>\n                        <label>Date</label>\n                    </div>\n                    <div class=\"md-form mb-5\">\n                        <mdb-icon fas icon=\"clock\" class=\"prefix grey-text\"></mdb-icon>\n                        <input type=\"text\" class=\"form-control text-light\" value=\"{{ reservation.reservation_date | date:'mediumTime' }}\" mdbInput readonly>\n                        <label>Time</label>\n                    </div>\n                    <div class=\"md-form mb-5\">\n                        <mdb-icon fas icon=\"atom\" class=\"prefix grey-text\"></mdb-icon>\n                        <input type=\"text\" class=\"form-control text-light\" value=\"{{ reservation.status }}\" mdbInput readonly>\n                        <label>Status</label>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-6\">\n                            <button type=\"button\" mdbBtn color=\"amber\" (click)=\"editModal.show(); showReservationModal.hide()\" class=\"waves-light d-flex justify-content-center\" block=\"true\" mdbWavesEffect>EDIT</button>\n                        </div>\n                        <div class=\"col-xl-6\">\n                            <button type=\"button\" mdbBtn color=\"danger\" (click)=\"confirmDeleteModal.show()\" class=\"waves-light d-flex justify-content-center\" block=\"true\" mdbWavesEffect>DELETE</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Edit Modal -->\n<div  style=\"overflow-y: auto\" mdbModal #editModal=\"mdbModal\" class=\"modal fade top bg-unique text-light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg bg-unique-dark\" role=\"document\">\n        <div class=\"modal-content bg-unique-dark\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"editModalLabel\">Edit Haircut Reservation</h5>\n                <button type=\"button\" class=\"close text-light\" (click)=\"editModal.hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body p-5 bg-unique-dark\">\n                <form #updateForm=\"ngForm\">\n                    <label for=\"editStyle\" class=\"\">Style</label>\n                    <select class=\"form-control text-dark\" [(ngModel)]=\"editStyle\" name=\"editStyle\">\n                        <option *ngFor=\"let style of styles\" [value]=\"style._id\" [selected]=\"style._id == reservationStyle._id\">{{ style.name }}</option>\n                    </select>\n\n                    <label for=\"bookingdate\" class=\"mt-3\">Date and Time</label>\n                        <div class=\"row mt-3\">\n                            <div class=\"col-lg-2\">\n                                Cur. Date:\n                            </div>\n                            <div class=\"col-lg-4\">\n                                <input class=\"form-control text-dark\" value=\"{{ reservation.reservation_date | date:'shortDate' }}\" disabled>\n                            </div>\n\n                            <div class=\"col-lg-2\">\n                                New Date:\n                            </div>\n                            <div class=\"col-lg-4\">\n                                <input mdbInput type=\"date\" #newdate=\"ngModel\" [(ngModel)]=\"newbookingdate\" name=\"newbookingdate\" class=\"form-control text-dark\" required>\n                            </div>\n                        </div>\n\n                        <div class=\"row mt-3\">\n                            <div class=\"col-lg-2\">\n                                Cur. Time:\n                            </div>\n                            <div class=\"col-lg-4\">\n                                <input class=\"form-control text-dark\" value=\"{{ reservation.reservation_date | date:'mediumTime' }}\" disabled>\n                            </div>\n\n                            <div class=\"col-lg-2\">\n                                New Time:\n                            </div>\n                            <div class=\"col-lg-4\">\n                                <input mdbInput type=\"time\" #newtime=\"ngModel\" [(ngModel)]=\"newbookingtime\" name =\"newbookingtime\" class=\"form-control text-dark\" required/>\n                            </div>\n                        </div>\n\n                    <button id=\"updateBtn\" class=\"btn btn-block btn-sm bg-amber text-light mt-3 py-3\" type=\"button\" (click)=\"confirmUpdateModal.show()\" [disabled]=\"updateForm.invalid\">Save</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- Update reservation confirm modal -->\n<div mdbModal #confirmUpdateModal=\"mdbModal\" class=\"modal fade left\" id=\"confirmUpdateModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\n\t<div class=\"modal-dialog modal-frame modal-top modal-notify modal-info\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header text-center bg-warning\">\n\t\t\t\tConfirm to save changes to this reservation\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"confirmUpdateModal.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer d-flex justify-content-center\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t\t\t<button (click)=\"confirmUpdateModal.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>CANCEL</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t\t\t<button (click)=\"updateReservation(); confirmUpdateModal.hide(); reservationUpdatedNotify.show(); editModal.hide()\" mdbBtn color=\"amber\" class=\"waves-light\" mdbWavesEffect>UPDATE</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Update reservation notify modal -->\n<div mdbModal #reservationUpdatedNotify=\"mdbModal\" class=\"modal fade right\" id=\"userUpdatedNotifyTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header text-center bg-info\">\n\t\t\t\tUser has been updated\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"reservationUpdatedNotify.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer d-flex justify-content-center\">\n\t\t\t\t<button (click)=\"reservationUpdatedNotify.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>OK</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n    <!-- Delete reservation confirm modal -->\n<div mdbModal #confirmDeleteModal=\"mdbModal\" class=\"modal fade left\" id=\"confirmDeleteModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\n\t<div class=\"modal-dialog modal-frame modal-top modal-notify\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header text-center bg-danger\">\n\t\t\t\tConfirm to delete reservation\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"confirmDeleteModal.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer d-flex justify-content-center\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t\t\t<button (click)=\"confirmDeleteModal.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>CANCEL</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t\t\t<button (click)=\"deleteReservation(); reservationDeletedNotify.show(); showReservationModal.hide(); confirmDeleteModal.hide()\" mdbBtn color=\"danger\" class=\"waves-light\" mdbWavesEffect>DELETE</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Delete reservation notify modal -->\n<div mdbModal #reservationDeletedNotify=\"mdbModal\" class=\"modal fade right\" id=\"userDeletedNotifyTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header text-center bg-info\">\n\t\t\t\tReservation has been deleted\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"reservationDeletedNotify.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer d-flex justify-content-center\">\n\t\t\t\t<button (click)=\"reservationDeletedNotify.hide(); getUsers()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>OK</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/styles/styles.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/styles/styles.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStylesStylesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row p-1 cards-container animated slideInLeft\">\n\n    <div class=\"card mt-2 mx-auto p-2 col-xl-10 col-lg-5 col-md-6 col-sm-6 \" *ngFor=\"let style of styles\">\n\n        <div class=\"row\"> \n\n                <div class=\"col-xl-4 \">\n                        <img class=\"img-fluid\" height=\"260\" width=\"100%\" src=\"assets/image/{{style.image}}\" class=\"trendingstylesImg z-depth-1\">\n                </div>\n\n                <div class=\"col-xl-5 descriptionContainer\">\n                    <h3 class=\"title\">{{style.name}}</h3>\n                    <p class=\"border p-3\">\n                        <span class=\"h5 stylist\">Haircut by Whitney Vermeer and Ignite Models<hr></span>\n                        Such a great looking haircut for guys that have curly hair. Super clean cut short sides blended into thick curly hair and longer fringe.</p>\n                </div>\n\n                <div class=\"col-xl-3 booknow\">\n                    <button class=\"bookNowBtn btn btn-sm btn-danger btn-block bg-amber text-light mt-1 px-5 py-2\" (click)=\"styleBooking.show(); getStyle(style._id)\">Book Now</button><p class=\"price h6 text-center\">for only PHP {{style.price}}</p>\n                </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n\n<!-- Modals -->\n\n<!-- Image Modal -->\n<div mdbModal #styleBooking=\"mdbModal\" class=\"modal fade bg-unique text-light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"styleBookingLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg bg-unique-dark\" role=\"document\">\n            <div class=\"modal-content bg-unique-dark\">\n                <div class=\"modal-header bg-unique-dark\">\n                    <h5 class=\"modal-title\" id=\"styleBookingLabel\">Our Style</h5>\n                    <button type=\"button\" class=\"close text-light\" (click)=\"styleBooking.hide()\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n    \n                <div class=\"modal-body bg-unique-dark\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-6\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-12\">\n                                    <img class=\"img-fluid animated zoomIn\" src=\"assets/image/{{style.image}}\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-6\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-12 modalContentTitle\">\n                                    <h2>{{style.name}}</h2>\n                                    <hr class=\"bg-amber\">\n                                    <p class=\"paragraph\" data-text=\"It's a way to stay cool while looking good.\">Its's a way to stay cool while looking good.</p>\n                                    <form #bookingForm=\"ngForm\" class=\"mt-3\">\n                                        <h4>Book Now</h4>\n                                        <hr class=\"bg-amber mb-5\">\n                                        <div class=\"md-form\">\n                                            <mdb-icon far icon=\"calendar-alt\"></mdb-icon>\n                                            <input (change)=\"getReservationDate();\" mdbInput type=\"date\" #date=\"ngModel\" [(ngModel)]=\"bookingdate\" name=\"bookingdate\" class=\"form-control text-light\" placeholder=\"\" [class.invalid]=\"date.invalid && date.touched\" required>\n                                            <span *ngIf=\"date.invalid && date.touched\" class=\"text-danger\">Required Field</span><label for=\"bookingdate\" class=\"text-light\">Date</label>\n                                        </div>\n    \n                                        <div *ngIf=\"date.valid\">\n                                            <mdb-icon far icon=\"clock\"></mdb-icon>\n                                            <label for=\"bookingtime\">Time</label>\n                                            <select  #time=\"ngModel\" [(ngModel)]=\"bookingtime\" name =\"bookingtime\" class=\"form-control text-light bg-unique-dark\" [class.invalid]=\"time.invalid && time.touched\" required>\n                                                  <option *ngFor=\"let row of reservationTime; index as i\" value=\"{{row}}\">{{row}}</option>\n                                            </select>\n                                            <span *ngIf=\"time.invalid && time.touched\" class=\"text-danger\">Required Field</span>\n                                        </div>\n    \n                                        <div class=\"md-form\">\n                                            <button class=\"btn btn-block bg-amber text-light mt-1\" type=\"button\" (click)=\"bookingConfirmModal.show()\" [disabled]=\"bookingForm.invalid\">Book</button>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <!-- Update user confirm modal -->\n    <div mdbModal #bookingConfirmModal=\"mdbModal\" class=\"modal fade left\" id=\"bookingConfirmModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\n        <div class=\"modal-dialog modal-frame modal-top modal-notify modal-info\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header text-center bg-info\">\n                    Please confirm to proceed booking\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bookingConfirmModal.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-footer d-flex justify-content-center\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-6\">\n                            <button (click)=\"bookingConfirmModal.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>CANCEL</button>\n                        </div>\n                        <div class=\"col-xl-6\">\n                            <button (click)=\"submitBooking(); bookingConfirmModal.hide(); bookingNotify.show(); styleBooking.hide()\" mdbBtn color=\"amber\" class=\"waves-light\" mdbWavesEffect>CONFIRM</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <!-- Update user notify modal -->\n    <div mdbModal #bookingNotify=\"mdbModal\" class=\"modal fade right\" id=\"bookingNotifyTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header text-center bg-info\">\n                    Booking Successful\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bookingNotify.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-footer d-flex justify-content-center\">\n                    <button (click)=\"bookingNotify.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>OK</button>\n                </div>\n            </div>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row content-container\">\n    <div class=\"col-md-6\">\n        <div class=\"mt-4\">\n            <h3>Clients</h3>\n        </div>\n    </div>\n\n    <div class=\"col-md-3 offset-3 float-right\">\n        <div class=\"md-form\">\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control text-light\" id=\"search\" mdbInput>\n            <label for=\"search\">Search</label>\n        </div>\n    </div>\n</div>\n<table mdbTable #tableEl=\"mdbTable\" class=\"z-depth-1\" small=\"true\">\n    <thead class=\"bg-dark text-light\">\n        <tr>\n            <th *ngFor=\"let head of headElements; let i = index\" scope=\"col\">{{head}}</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let user of users; let i = index\" (click)=\"viewUser(user._id); showUserModal.show()\" class=\"hand-on-hover\">\n            <th *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\" scope=\"row\"><a type=\"button\">{{user.firstname }} {{ user.middlename }} {{ user.lastname }}</a></th>\n            <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"><a type=\"button\">{{user.phone}}</a></td>\n            <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{user.email}}</td>\n        </tr>\n    </tbody>\n    <tfoot class=\"grey lighten-5 w-100\">\n        <tr>\n            <td colspan=\"12\">\n            <mdb-table-pagination [tableEl]=\"tableEl\" [searchDataSource]=\"users\"></mdb-table-pagination>\n        </td>\n        </tr>\n    </tfoot>\n</table>\n\n\n<!-- Modals -->\n\n<!-- Show user modal -->\n<div mdbModal #showUserModal=\"mdbModal\" class=\"modal fade bottom bg-unique text-light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content bg-unique-dark\">\n\t\t\t<div class=\"modal-header bg-unique-dark\">\n\t\t\t\t<h4 class=\"modal-title w-100 font-weight-bold\">User Information</h4>\n\t\t\t\t<button type=\"button\" class=\"close text-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showUserModal.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body mx-3 bg-unique-dark\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"md-form mb-5\">\n\t\t\t\t\t\t<mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control text-light\" value=\"{{user.firstname}} {{user.middlename}} {{user.lastname}}\" mdbInput readonly>\n\t\t\t\t\t\t<label for=\"userNameEdit\">Name</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"md-form mb-5\">\n\t\t\t\t\t\t<mdb-icon fas icon=\"mobile-alt\" class=\"prefix grey-text\"></mdb-icon>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control text-light\" value=\"{{user.phone}}\"mdbInput readonly>\n\t\t\t\t\t\t<label for=\"userAgeEdit\">Phone</label>\n                    </div>\n                    <div class=\"md-form mb-5\">\n\t\t\t\t\t\t<mdb-icon fas icon=\"envelope\" class=\"prefix grey-text\"></mdb-icon>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control text-light\" value=\"{{user.email}}\"mdbInput readonly>\n\t\t\t\t\t\t<label for=\"userAgeEdit\">Email</label>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-6\">\n                            <button type=\"button\" (click)=\"editUser(); showUserModal.hide(); editUserModal.show()\" mdbBtn color=\"amber\" class=\"waves-light d-flex justify-content-center\" block=\"true\" mdbWavesEffect>EDIT</button>\n                        </div>\n                        <div class=\"col-xl-6\">\n                            <button type=\"button\" (click)=\"showUserModal.hide(); confirmDeleteModal.show()\" mdbBtn color=\"danger\" class=\"waves-light d-flex justify-content-center\" block=\"true\" mdbWavesEffect>DELETE</button>\n                        </div>\n                    </div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- Edit user modal -->\n<div mdbModal #editUserModal=\"mdbModal\" class=\"modal fade top bg-unique text-light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog bg-unique-dark\" role=\"document\">\n\t\t<div class=\"modal-content bg-unique-dark\">\n\t\t\t<div class=\"modal-header bg-unique-dark\">\n\t\t\t\t<h4 class=\"modal-title w-100 font-weight-bold\">Update User</h4>\n\t\t\t\t<button type=\"button\" class=\"close text-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"editUserModal.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body mx-3 bg-unique-dark\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"md-form mb-5\">\n\t\t\t\t\t\t<mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\n\t\t\t\t\t\t<input pattern=\"[^/0-9!@#$%^&*(){}|;,/]*\" type=\"text\" class=\"form-control text-light\" #editfirstname=\"ngModel\" name=\"editFirstname\" [(ngModel)]=\"editFirstname\" mdbInput required>\n                        <label for=\"editFirstname\">Firstname</label>\n                        <mdb-error *ngIf=\"editfirstname.invalid && (editfirstname.dirty || editfirstname.touched)\">Input format</mdb-error>\n                    </div>\n                    <div class=\"md-form mb-5\">\n\t\t\t\t\t\t<mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\n\t\t\t\t\t\t<input pattern=\"[^/0-9!@#$%^&*(){}|;,/]*\" type=\"text\" class=\"form-control text-light\" #editmiddlename=\"ngModel\" name=\"editMiddlename\" [(ngModel)]=\"editMiddlename\" mdbInput required>\n                        <label for=\"editMiddlename\">Middlename</label>\n                        <mdb-error *ngIf=\"editmiddlename.invalid && (editmiddlename.dirty || editmiddlename.touched)\">Input format</mdb-error>\n                    </div>\n                    <div class=\"md-form mb-5\">\n\t\t\t\t\t\t<mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\n\t\t\t\t\t\t<input pattern=\"[^/0-9!@#$%^&*(){}|;,/]*\" type=\"text\" class=\"form-control text-light\" #editlastname=\"ngModel\" name=\"editLastname\" [(ngModel)]=\"editLastname\" mdbInput required>\n                        <label for=\"editLastname\">Lastname</label>\n                        <mdb-error *ngIf=\"editlastname.invalid && (editlastname.dirty || editlastname.touched)\">Input format</mdb-error>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"md-form mb-5\">\n\t\t\t\t\t\t<mdb-icon fas icon=\"mobile-alt\" class=\"prefix grey-text\"></mdb-icon>\n\t\t\t\t\t\t<input pattern=\"[/0-9/]*\" type=\"text\" class=\"form-control text-light\" #editphone=\"ngModel\" name=\"editPhone\" [(ngModel)]=\"editPhone\" maxlength=\"11\" placeholder=\"Ex. 09191234567\" mdbInput required>\n                        <label for=\"editPhone\">Phone</label>\n                        <mdb-error *ngIf=\"editphone.invalid && (editphone.dirty || editphone.touched)\">Input phone format</mdb-error>\n                    </div>\n                    <div class=\"md-form mb-5\">\n\t\t\t\t\t\t<mdb-icon fas icon=\"envelope\" class=\"prefix grey-text\"></mdb-icon>\n\t\t\t\t\t\t<input pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]*\" type=\"text\" class=\"form-control text-light\" #editemail=\"ngModel\" name=\"editEmail\" [(ngModel)]=\"editEmail\" placeholder=\"Ex. guest@email.com\" mdbInput required>\n                        <label for=\"editEmail\">Email</label>\n                        <mdb-error *ngIf=\"editemail.invalid && (editemail.dirty || editemail.touched)\">Input email format</mdb-error>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-6\">\n                            <button type=\"button\" mdbBtn color=\"blue-grey\" (click)=\"editUserModal.hide()\" class=\"waves-light d-flex justify-content-center\" block=\"true\" mdbWavesEffect>CANCEL</button>\n                        </div>\n                        <div class=\"col-xl-6\">\n                            <button type=\"button\" mdbBtn color=\"amber\" (click)=\"confirmUpdateModal.show()\" class=\"waves-light d-flex justify-content-center\" block=\"true\" mdbWavesEffect>UPDATE</button>\n                        </div>\n                    </div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- Update user confirm modal -->\n<div mdbModal #confirmUpdateModal=\"mdbModal\" class=\"modal fade left\" id=\"confirmUpdateModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\n\t<div class=\"modal-dialog modal-frame modal-top modal-notify modal-info\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header text-center bg-warning\">\n\t\t\t\tConfirm to save changes to this user\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"confirmUpdateModal.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer d-flex justify-content-center\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t\t\t<button (click)=\"confirmUpdateModal.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>CANCEL</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t\t\t<button (click)=\"updateUser(); confirmUpdateModal.hide(); userUpdatedNotify.show(); editUserModal.hide()\" mdbBtn color=\"amber\" class=\"waves-light\" mdbWavesEffect>UPDATE</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- Update user notify modal -->\n<div mdbModal #userUpdatedNotify=\"mdbModal\" class=\"modal fade right\" id=\"userUpdatedNotifyTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header text-center bg-info\">\n\t\t\t\tUser has been updated\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"userUpdatedNotify.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer d-flex justify-content-center\">\n\t\t\t\t<button (click)=\"userUpdatedNotify.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>OK</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- Delete user confirm modal -->\n<div mdbModal #confirmDeleteModal=\"mdbModal\" class=\"modal fade left\" id=\"confirmDeleteModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\n\t<div class=\"modal-dialog modal-frame modal-top modal-notify\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header text-center bg-danger\">\n\t\t\t\tConfirm to delete user\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"confirmDeleteModal.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer d-flex justify-content-center\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t\t\t<button (click)=\"confirmDeleteModal.hide()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>CANCEL</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t\t\t<button (click)=\"deleteUser(); userDeletedNotify.show(); showUserModal.hide(); confirmDeleteModal.hide()\" mdbBtn color=\"danger\" class=\"waves-light\" mdbWavesEffect>DELETE</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n<!-- Delete user notify modal -->\n<div mdbModal #userDeletedNotify=\"mdbModal\" class=\"modal fade right\" id=\"userDeletedNotifyTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header text-center bg-info\">\n\t\t\t\tUser has been deleted\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"userDeletedNotify.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer d-flex justify-content-center\">\n\t\t\t\t<button (click)=\"userDeletedNotify.hide(); getUsers()\" mdbBtn color=\"blue-grey\" class=\"waves-light\" mdbWavesEffect>OK</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/account/account.component.scss":
  /*!************************************************!*\
    !*** ./src/app/account/account.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hand-on-hover {\n  color: black;\n  transition: 0.2s;\n}\n\n.hand-on-hover:hover {\n  cursor: pointer;\n  background-color: gray;\n  color: white;\n  transition: 0.2s;\n}\n\n.bg-unique {\n  background-color: #3F729B;\n}\n\n.bg-unique-dark {\n  background-color: #1C2331;\n}\n\n.paragraph {\n  color: transparent;\n}\n\n.paragraph:before {\n  content: attr(data-text);\n  position: absolute;\n  -webkit-animation: type 5s steps(46);\n          animation: type 5s steps(46);\n  width: 100%;\n  height: 100%;\n  color: white;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.container {\n  width: 100%;\n}\n\n@-webkit-keyframes type {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 100%;\n  }\n  0% {\n    width: 0;\n  }\n}\n\n@keyframes type {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 100%;\n  }\n  0% {\n    width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9EOlxcTUVBTlByb2plY3RzXFxtZW5iYXJiZXJzL3NyY1xcYXBwXFxhY2NvdW50XFxhY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0MseUJBQUE7QUNDRDs7QURFQTtFQUNDLHlCQUFBO0FDQ0Q7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUE7RUFDSSxXQUFBO0FDR0o7O0FEQUE7RUFFQTtJQUVJLFFBQUE7RUNDRjtFRENGO0lBRUksV0FBQTtFQ0FGO0VERUY7SUFFSSxRQUFBO0VDREY7QUFDRjs7QURaQTtFQUVBO0lBRUksUUFBQTtFQ0NGO0VEQ0Y7SUFFSSxXQUFBO0VDQUY7RURFRjtJQUVJLFFBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbmQtb24taG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjouMnM7XHJcbn1cclxuXHJcbi5oYW5kLW9uLWhvdmVyOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbn0gICBcclxuXHJcbi5iZy11bmlxdWUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzRjcyOUI7XHJcbn1cclxuXHJcbi5iZy11bmlxdWUtZGFyayB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFDMjMzMTtcclxufVxyXG4ucGFyYWdyYXBoe1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5wYXJhZ3JhcGg6YmVmb3Jle1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYW5pbWF0aW9uOiB0eXBlIDVzIHN0ZXBzKDQ2KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgXHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGVcclxueyBcclxuMCUgICBcclxuICAgIHtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcbjUwJVxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4wJVxyXG57XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG59IiwiLmhhbmQtb24taG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5oYW5kLW9uLWhvdmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5iZy11bmlxdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y3MjlCO1xufVxuXG4uYmctdW5pcXVlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyMzMxO1xufVxuXG4ucGFyYWdyYXBoIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFyYWdyYXBoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb246IHR5cGUgNXMgc3RlcHMoNDYpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQGtleWZyYW1lcyB0eXBlIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/account.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/account/account.component.ts ***!
    \**********************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_reservation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/reservation.service */
    "./src/app/services/reservation.service.ts");
    /* harmony import */


    var _models_reservation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/reservation */
    "./src/app/models/reservation.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_style_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/style.service */
    "./src/app/services/style.service.ts");
    /* harmony import */


    var _models_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/style */
    "./src/app/models/style.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");

    var AccountComponent =
    /*#__PURE__*/
    function () {
      function AccountComponent(styleService, reservationService, userService, cdRef) {
        _classCallCheck(this, AccountComponent);

        this.styleService = styleService;
        this.reservationService = reservationService;
        this.userService = userService;
        this.cdRef = cdRef;
        this.haircuts = [];
        this.previous = [];
        this.headElements = ['Style', 'Date', 'Status'];
        this.searchText = '';
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_8__["User"]();
        this.reservationTime = [];
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('token')) {
            var id = localStorage.getItem('token');
            this.viewUser(id.slice(0, 24));
          }

          this.style = new _models_style__WEBPACK_IMPORTED_MODULE_7__["Style"]();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
          this.mdbTablePagination.calculateFirstItemIndex();
          this.mdbTablePagination.calculateLastItemIndex();
          this.cdRef.detectChanges();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this = this;

          this.reservationService.getUserReservations(this.user._id).subscribe(function (response) {
            _this.haircuts = response;

            _this.mdbTable.setDataSource(_this.haircuts);

            _this.haircuts = _this.mdbTable.getDataSource();
            _this.previous = _this.mdbTable.getDataSource();
          });
        }
      }, {
        key: "editUser",
        value: function editUser() {
          this.editFirstname = this.user.firstname;
          this.editMiddlename = this.user.middlename;
          this.editLastname = this.user.lastname;
          this.editPhone = this.user.phone;
          this.editEmail = this.user.email;
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this2 = this;

          this.user.firstname = this.editFirstname;
          this.user.middlename = this.editMiddlename;
          this.user.lastname = this.editLastname;
          this.user.phone = this.editPhone;
          this.user.email = this.editEmail;
          this.userService.updateUser(this.user).subscribe(function (response) {
            _this2.getUser();
          });
        }
      }, {
        key: "viewUser",
        value: function viewUser(id) {
          var _this3 = this;

          this.userService.viewUser(id).subscribe(function (response) {
            _this3.user = response[0];

            _this3.getUser();
          });
        }
      }, {
        key: "getStyle",
        value: function getStyle(id) {
          var _this4 = this;

          this.styleService.getStyle(id).subscribe(function (response) {
            _this4.style = response[0];
          });
        }
      }, {
        key: "submitBooking",
        value: function submitBooking() {
          var _this5 = this;

          var reservation = new _models_reservation__WEBPACK_IMPORTED_MODULE_4__["Reservation"]();
          this.bookingdate = this.bookingdate + ", " + this.bookingtime;
          reservation.reservation_date = this.bookingdate;
          reservation.client_id = this.user._id;
          reservation.style_id = this.style._id;
          reservation.total = this.style.price;
          reservation.status = "Reserved";
          this.reservationService.addReservation(reservation).subscribe(function (response) {
            _this5.getUser();
          });
        }
      }, {
        key: "getReservationDate",
        value: function getReservationDate() {
          var _this6 = this;

          this.bookingdate = this.bookingdate;
          this.reservationService.getReservationDate(this.bookingdate).subscribe(function (response) {
            _this6.reservationTime = response;
          });
        }
      }]);

      return AccountComponent;
    }();

    AccountComponent.ctorParameters = function () {
      return [{
        type: _services_style_service__WEBPACK_IMPORTED_MODULE_6__["StyleService"]
      }, {
        type: _services_reservation_service__WEBPACK_IMPORTED_MODULE_3__["ReservationService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTablePaginationComponent"], {
      static: true
    })], AccountComponent.prototype, "mdbTablePagination", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTableDirective"], {
      static: true
    })], AccountComponent.prototype, "mdbTable", void 0);
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.component.scss */
      "./src/app/account/account.component.scss")).default]
    })], AccountComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _styles_styles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./styles/styles.component */
    "./src/app/styles/styles.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./reservations/reservations.component */
    "./src/app/reservations/reservations.component.ts");
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/account/account.component.ts");
    /* harmony import */


    var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pagenotfound/pagenotfound.component */
    "./src/app/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _user_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user.guard */
    "./src/app/user.guard.ts");

    var routes = [{
      path: "",
      redirectTo: "/home",
      pathMatch: "full"
    }, {
      path: "home",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
      canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_10__["UserGuard"]]
    }, {
      path: "styles",
      component: _styles_styles_component__WEBPACK_IMPORTED_MODULE_5__["StylesComponent"]
    }, {
      path: "reservations",
      component: _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_7__["ReservationsComponent"],
      canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_10__["UserGuard"]]
    }, {
      path: "users",
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
      canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_10__["UserGuard"]]
    }, {
      path: "account",
      component: _account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"],
      canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_10__["UserGuard"]]
    }, {
      path: "*",
      component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  color: black;\n}\n\n.bg-amber {\n  background-color: #f44336;\n}\n\n.linkHover:hover {\n  transition: 0.4s;\n  color: white;\n}\n\n.linkActive {\n  color: white;\n}\n\nfooter {\n  margin-top: 100px;\n}\n\n.bg-unique {\n  background-color: #3F729B;\n}\n\n.bg-unique-dark {\n  background-color: #1C2331;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXE1FQU5Qcm9qZWN0c1xcbWVuYmFyYmVycy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQyx5QkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxpQkFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7QUNDRDs7QURFQTtFQUNDLHlCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG5cdGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4uYmctYW1iZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLmxpbmtIb3Zlcjpob3ZlcntcclxuXHR0cmFuc2l0aW9uOiAuNHM7XHJcblx0Y29sb3I6IHdoaXRlOyBcclxufVxyXG5cclxuLmxpbmtBY3RpdmV7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG5cdG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uYmctdW5pcXVlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y3MjlCO1xyXG59XHJcblxyXG4uYmctdW5pcXVlLWRhcmsge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxQzIzMzE7XHJcbn0iLCJhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYmctYW1iZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubGlua0hvdmVyOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGlua0FjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5iZy11bmlxdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y3MjlCO1xufVxuXG4uYmctdW5pcXVlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyMzMxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/user */
    "./src/app/models/user.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(userService) {
        _classCallCheck(this, AppComponent);

        this.userService = userService;
        this.title = "Men's Barber";
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](); // registration

        this.createAccount = false;
        this.loggedIn = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (localStorage.getItem('token')) {
            this.loggedIn = true;
            var id = localStorage.getItem('token');
            this.userService.viewUser(id.slice(0, 24)).subscribe(function (response) {
              _this7.user = response[0];
            });
          }
        }
      }, {
        key: "addUser",
        value: function addUser() {
          var newuser = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
          newuser.firstname = this.registerFirstname;
          newuser.middlename = this.registerMiddlename;
          newuser.lastname = this.registerLastname;
          newuser.phone = this.registerPhone;
          newuser.email = this.registerEmail;
          newuser.password = this.registerPassword;
          this.userService.addUser(newuser).subscribe(function (data) {
            if (data.msg == "success") {
              alert("Registration Successful");
            }
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this8 = this;

          this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
          this.user.email = this.userEmail;
          this.user.password = this.userPassword;
          this.userService.login(this.user).subscribe(function (response) {
            if (response.msg == "success") {
              localStorage.setItem('token', response.user._id + "." + response.token);
              var id = localStorage.getItem('token');

              _this8.viewUser(id.slice(0, 24));

              if (!!localStorage.getItem('token')) {
                _this8.loggedIn = true;
                alert("Login Success");
                window.location.href = "/";
              }
            } else {
              alert("Login failed");
            }
          });
        }
      }, {
        key: "viewUser",
        value: function viewUser(id) {
          var _this9 = this;

          this.userService.viewUser(id).subscribe(function (response) {
            _this9.user = response[0];
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          if (confirm("Are you sure to logout?")) {
            alert("Logged out");
            window.location.href = "/";
            localStorage.removeItem("token");
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _styles_styles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./styles/styles.component */
    "./src/app/styles/styles.component.ts");
    /* harmony import */


    var _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./reservations/reservations.component */
    "./src/app/reservations/reservations.component.ts");
    /* harmony import */


    var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pagenotfound/pagenotfound.component */
    "./src/app/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/account/account.component.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _user_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user.guard */
    "./src/app/user.guard.ts");
    /* harmony import */


    var _services_style_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/style.service */
    "./src/app/services/style.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _styles_styles_component__WEBPACK_IMPORTED_MODULE_9__["StylesComponent"], _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_10__["ReservationsComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PagenotfoundComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _account_account_component__WEBPACK_IMPORTED_MODULE_14__["AccountComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot()],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _user_guard__WEBPACK_IMPORTED_MODULE_16__["UserGuard"], _services_style_service__WEBPACK_IMPORTED_MODULE_17__["StyleService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#content {\n  margin-top: 100px;\n  padding-left: 20px;\n}\n\n.hand-on-hover {\n  color: black;\n  transition: 0.2s;\n}\n\n.hand-on-hover:hover {\n  cursor: pointer;\n  background-color: gray;\n  color: white;\n  transition: 0.2s;\n}\n\n.bg-unique {\n  background-color: #3F729B;\n}\n\n.bg-unique-dark {\n  background-color: #1C2331;\n}\n\n.col-lg-4 {\n  margin-top: 5%;\n  border-radius: 5px;\n}\n\nh5 {\n  border-bottom: solid black 1px;\n  font-size: 25px;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxNRUFOUHJvamVjdHNcXG1lbmJhcmJlcnMvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNBLHlCQUFBO0FDQ0E7O0FERUE7RUFDQSx5QkFBQTtBQ0NBOztBRENBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxxR0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLmhhbmQtb24taG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0cmFuc2l0aW9uOi4ycztcclxufVxyXG5cclxuLmhhbmQtb24taG92ZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAuMnM7XHJcbn0gICBcclxuXHJcbi5iZy11bmlxdWUge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjM0Y3MjlCO1xyXG59XHJcblxyXG4uYmctdW5pcXVlLWRhcmsge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMUMyMzMxO1xyXG59XHJcbi5jb2wtbGctNHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuaDV7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2sgMXB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbiIsIiNjb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmhhbmQtb24taG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5oYW5kLW9uLWhvdmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5iZy11bmlxdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y3MjlCO1xufVxuXG4uYmctdW5pcXVlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyMzMxO1xufVxuXG4uY29sLWxnLTQge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5oNSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDFweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/style */
    "./src/app/models/style.ts");
    /* harmony import */


    var _services_style_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/style.service */
    "./src/app/services/style.service.ts");
    /* harmony import */


    var _models_reservation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/reservation */
    "./src/app/models/reservation.ts");
    /* harmony import */


    var _services_reservation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/reservation.service */
    "./src/app/services/reservation.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(cdRef, styleService, reservationService, userService) {
        _classCallCheck(this, DashboardComponent);

        this.cdRef = cdRef;
        this.styleService = styleService;
        this.reservationService = reservationService;
        this.userService = userService;
        this.users = [];
        this.styles = [];
        this.previous = [];
        this.reservations = [];
        this.todaysreservations = [];
        this.completedreservations = [];
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_8__["User"]();
        this.reservationStyle = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
          this.getStylesCount();
          this.getReservations();
          this.getCompletedReservation();
          this.getReservationsToday();
          this.reservation = new _models_reservation__WEBPACK_IMPORTED_MODULE_5__["Reservation"]();
          this.reservationClient = new _models_user__WEBPACK_IMPORTED_MODULE_8__["User"]();
          this.reservationStyle = new _models_style__WEBPACK_IMPORTED_MODULE_3__["Style"]();

          if (!!localStorage.getItem('token')) {
            var id = localStorage.getItem('token');
            this.viewUser(id.slice(0, 24));
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
          this.mdbTablePagination.calculateFirstItemIndex();
          this.mdbTablePagination.calculateLastItemIndex();
          this.cdRef.detectChanges();
        }
      }, {
        key: "getStylesCount",
        value: function getStylesCount() {
          var _this10 = this;

          this.styleService.getStyles().subscribe(function (response) {
            _this10.styles = response;
          });
        }
      }, {
        key: "getReservation",
        value: function getReservation(id) {
          var _this11 = this;

          this.reservationService.getReservation(id).subscribe(function (response) {
            _this11.reservation = response[0];
            _this11.reservationClient = response[0].client_id;
            _this11.reservationStyle = response[0].style_id;
          });
        }
      }, {
        key: "getReservations",
        value: function getReservations() {
          var _this12 = this;

          this.reservationService.getReservations().subscribe(function (response) {
            _this12.reservations = response;

            _this12.mdbTable.setDataSource(_this12.reservations);

            _this12.reservations = _this12.mdbTable.getDataSource();
            _this12.previous = _this12.mdbTable.getDataSource();
          });
        }
      }, {
        key: "startHaircut",
        value: function startHaircut() {
          var _this13 = this;

          var reservation = new _models_reservation__WEBPACK_IMPORTED_MODULE_5__["Reservation"]();
          reservation._id = this.reservation._id;
          reservation.reservation_date = this.reservation.reservation_date;
          reservation.total = this.reservation.total;
          reservation.status = "Serving";
          reservation.client_id = this.reservationClient._id;
          reservation.style_id = this.reservationStyle._id;
          this.reservationService.updateReservation(reservation).subscribe(function (response) {
            _this13.getReservationsToday();
          });
        }
      }, {
        key: "completeHaircut",
        value: function completeHaircut() {
          var _this14 = this;

          var reservation = new _models_reservation__WEBPACK_IMPORTED_MODULE_5__["Reservation"]();
          reservation._id = this.reservation._id;
          reservation.reservation_date = this.reservation.reservation_date;
          reservation.total = this.reservation.total;
          reservation.status = "Completed";
          reservation.client_id = this.reservationClient._id;
          reservation.style_id = this.reservationStyle._id;
          this.reservationService.updateReservation(reservation).subscribe(function (response) {
            _this14.getReservationsToday();

            _this14.getCompletedReservation();
          });
        }
      }, {
        key: "getReservationsToday",
        value: function getReservationsToday() {
          var _this15 = this;

          this.reservationService.getReservationsToday().subscribe(function (response) {
            _this15.todaysreservations = response;

            _this15.mdbTable.setDataSource(_this15.todaysreservations);

            _this15.todaysreservations = _this15.mdbTable.getDataSource();
            _this15.previous = _this15.mdbTable.getDataSource();
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this16 = this;

          this.userService.getUsers().subscribe(function (response) {
            _this16.users = response;
          });
        }
      }, {
        key: "getCompletedReservation",
        value: function getCompletedReservation() {
          var _this17 = this;

          this.reservationService.getCompletedReservations().subscribe(function (response) {
            _this17.completedreservations = response;
          });
        }
      }, {
        key: "viewUser",
        value: function viewUser(id) {
          var _this18 = this;

          this.userService.viewUser(id).subscribe(function (response) {
            _this18.user = response[0];

            if (_this18.user.role == "client") {
              window.location.href = "/home";
            }
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _services_style_service__WEBPACK_IMPORTED_MODULE_4__["StyleService"]
      }, {
        type: _services_reservation_service__WEBPACK_IMPORTED_MODULE_6__["ReservationService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTablePaginationComponent"], {
      static: true
    })], DashboardComponent.prototype, "mdbTablePagination", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTableDirective"], {
      static: true
    })], DashboardComponent.prototype, "mdbTable", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".homeimg {\n  height: 100%;\n  margin-top: 45px;\n}\n\n.floater {\n  position: absolute;\n  top: 250px;\n  left: 80px;\n  z-index: 2;\n}\n\n.trendingstylesRow {\n  margin-bottom: 100px;\n}\n\n.trendingstylesImg {\n  height: 150px;\n  width: 100%;\n}\n\n.trendingstylesImg:hover {\n  opacity: 0.7;\n  transition: 0.3s;\n}\n\n#fbLoginBtn {\n  border-radius: 100px;\n  color: white;\n}\n\n#googleLoginBtn {\n  border-radius: 100px;\n  color: white;\n}\n\n.bg-unique {\n  background-color: #3F729B;\n}\n\n.bg-unique-dark {\n  background-color: #1C2331;\n}\n\n@media screen and (max-width: 650px) {\n  .floater {\n    position: absolute;\n    top: 80px;\n    left: 50px;\n    z-index: 2;\n    font-size: 80%;\n  }\n\n  .tagline {\n    font-size: 300%;\n  }\n}\n\n@media screen and (max-width: 440px) {\n  .trendingstylesImg {\n    height: 250px;\n    width: 100%;\n  }\n\n  .floater {\n    position: absolute;\n    top: 100px;\n    left: 30px;\n    z-index: 2;\n    font-size: 80%;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  .floater {\n    position: absolute;\n    top: 100px;\n    left: 30px;\n    z-index: 2;\n    font-size: 80%;\n  }\n\n  .tagline {\n    font-size: 200%;\n  }\n\n  .homeimg {\n    height: 100%;\n    margin-top: 75px;\n  }\n}\n\np {\n  color: transparent;\n}\n\np:before {\n  content: attr(data-text);\n  position: absolute;\n  -webkit-animation: type 5s steps(46);\n          animation: type 5s steps(46);\n  width: 100%;\n  height: 100%;\n  color: white;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.container {\n  width: 100%;\n}\n\n@-webkit-keyframes type {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 100%;\n  }\n  0% {\n    width: 0;\n  }\n}\n\n@keyframes type {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 100%;\n  }\n  0% {\n    width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcTUVBTlByb2plY3RzXFxtZW5iYXJiZXJzL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDRyxVQUFBO0FDQ0o7O0FERUE7RUFDRyxvQkFBQTtBQ0NIOztBREVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNDLHlCQUFBO0FDQ0Q7O0FERUE7RUFDQyx5QkFBQTtBQ0NEOztBREdBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUNBTjs7RURFRTtJQUNJLGVBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsV0FBQTtFQ0FOOztFREdFO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VDRE47O0VER0U7SUFDSSxlQUFBO0VDQU47O0VER0U7SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0ksa0JBQUE7QUNESjs7QURHQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBRUE7SUFFSSxRQUFBO0VDRkY7RURJRjtJQUVJLFdBQUE7RUNIRjtFREtGO0lBRUksUUFBQTtFQ0pGO0FBQ0Y7O0FEVEE7RUFFQTtJQUVJLFFBQUE7RUNGRjtFRElGO0lBRUksV0FBQTtFQ0hGO0VES0Y7SUFFSSxRQUFBO0VDSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21laW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxufVxyXG5cclxuLmZsb2F0ZXJ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMjUwcHg7XHJcblx0bGVmdDogODBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi50cmVuZGluZ3N0eWxlc1Jvd3tcclxuICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7IFxyXG59XHJcblxyXG4udHJlbmRpbmdzdHlsZXNJbWd7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50cmVuZGluZ3N0eWxlc0ltZzpob3ZlcntcclxuICAgIG9wYWNpdHk6IC43O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG4jZmJMb2dpbkJ0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jZ29vZ2xlTG9naW5CdG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJnLXVuaXF1ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzNGNzI5QjtcclxufVxyXG5cclxuLmJnLXVuaXF1ZS1kYXJrIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyMzMxO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC5mbG9hdGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDgwcHg7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgfVxyXG4gICAgLnRhZ2xpbmV7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xyXG4gICAgLnRyZW5kaW5nc3R5bGVzSW1ne1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsb2F0ZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmZsb2F0ZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgfVxyXG4gICAgLnRhZ2xpbmV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob21laW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5we1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbnA6YmVmb3Jle1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYW5pbWF0aW9uOiB0eXBlIDVzIHN0ZXBzKDQ2KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgXHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGVcclxueyBcclxuMCUgICBcclxuICAgIHtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcbjUwJVxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4wJVxyXG57XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIuaG9tZWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNDVweDtcbn1cblxuLmZsb2F0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUwcHg7XG4gIGxlZnQ6IDgwcHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi50cmVuZGluZ3N0eWxlc1JvdyB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4udHJlbmRpbmdzdHlsZXNJbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRyZW5kaW5nc3R5bGVzSW1nOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4jZmJMb2dpbkJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNnb29nbGVMb2dpbkJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy11bmlxdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y3MjlCO1xufVxuXG4uYmctdW5pcXVlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyMzMxO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAuZmxvYXRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogODBweDtcbiAgICBsZWZ0OiA1MHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gIH1cblxuICAudGFnbGluZSB7XG4gICAgZm9udC1zaXplOiAzMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAudHJlbmRpbmdzdHlsZXNJbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZmxvYXRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogMzBweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuZmxvYXRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogMzBweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICB9XG5cbiAgLnRhZ2xpbmUge1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgfVxuXG4gIC5ob21laW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNzVweDtcbiAgfVxufVxucCB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxucDpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYW5pbWF0aW9uOiB0eXBlIDVzIHN0ZXBzKDQ2KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgdHlwZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/style */
    "./src/app/models/style.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _services_style_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/style.service */
    "./src/app/services/style.service.ts");
    /* harmony import */


    var _models_reservation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/reservation */
    "./src/app/models/reservation.ts");
    /* harmony import */


    var _services_reservation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/reservation.service */
    "./src/app/services/reservation.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(styleService, reservationService, userService) {
        _classCallCheck(this, HomeComponent);

        this.styleService = styleService;
        this.reservationService = reservationService;
        this.userService = userService;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.reservationTime = [];
        this.style = new _models_style__WEBPACK_IMPORTED_MODULE_2__["Style"]();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getStyles();
          this.getTrendingStyles();
        }
      }, {
        key: "getStyles",
        value: function getStyles() {
          var _this19 = this;

          this.styleService.getStyles().subscribe(function (response) {
            _this19.styles = response;
          });
        }
      }, {
        key: "getTrendingStyles",
        value: function getTrendingStyles() {
          var _this20 = this;

          this.styleService.getTrendingStyles().subscribe(function (response) {
            _this20.trendingstyles = response;
          });
        }
      }, {
        key: "getStyle",
        value: function getStyle(id) {
          var _this21 = this;

          this.styleService.getStyle(id).subscribe(function (response) {
            _this21.style._id = response[0]._id;
            _this21.style.name = response[0].name;
            _this21.style.description = response[0].description;
            _this21.style.price = response[0].price;
            _this21.style.image = response[0].image;
          });
        }
      }, {
        key: "submitBooking",
        value: function submitBooking() {
          var _this22 = this;

          var reservation = new _models_reservation__WEBPACK_IMPORTED_MODULE_5__["Reservation"]();
          this.bookingdate = this.bookingdate + ", " + this.bookingtime;
          reservation.reservation_date = this.bookingdate;
          var id = localStorage.getItem('token');
          reservation.client_id = id.slice(0, 24);
          reservation.style_id = this.style._id;
          reservation.total = this.style.price;
          reservation.status = "Reserved";
          this.reservationService.addReservation(reservation).subscribe(function (response) {
            if (response.msg == 'success') {
              _this22.reservationService.addCountToStyle(reservation).subscribe(function (response) {});
            }
          });
        }
      }, {
        key: "getReservationDate",
        value: function getReservationDate() {
          var _this23 = this;

          this.bookingdate = this.bookingdate;
          this.reservationService.getReservationDate(this.bookingdate).subscribe(function (response) {
            _this23.reservationTime = response;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_style_service__WEBPACK_IMPORTED_MODULE_4__["StyleService"]
      }, {
        type: _services_reservation_service__WEBPACK_IMPORTED_MODULE_6__["ReservationService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/models/reservation.ts":
  /*!***************************************!*\
    !*** ./src/app/models/reservation.ts ***!
    \***************************************/

  /*! exports provided: Reservation */

  /***/
  function srcAppModelsReservationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Reservation", function () {
      return Reservation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Reservation = function Reservation() {
      _classCallCheck(this, Reservation);
    };
    /***/

  },

  /***/
  "./src/app/models/style.ts":
  /*!*********************************!*\
    !*** ./src/app/models/style.ts ***!
    \*********************************/

  /*! exports provided: Style */

  /***/
  function srcAppModelsStyleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Style", function () {
      return Style;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Style = function Style() {
      _classCallCheck(this, Style);
    };
    /***/

  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/pagenotfound/pagenotfound.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagenotfoundPagenotfoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pagenotfound/pagenotfound.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
    \********************************************************/

  /*! exports provided: PagenotfoundComponent */

  /***/
  function srcAppPagenotfoundPagenotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
      return PagenotfoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PagenotfoundComponent =
    /*#__PURE__*/
    function () {
      function PagenotfoundComponent() {
        _classCallCheck(this, PagenotfoundComponent);
      }

      _createClass(PagenotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagenotfoundComponent;
    }();

    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pagenotfound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pagenotfound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pagenotfound.component.scss */
      "./src/app/pagenotfound/pagenotfound.component.scss")).default]
    })], PagenotfoundComponent);
    /***/
  },

  /***/
  "./src/app/reservations/reservations.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/reservations/reservations.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReservationsReservationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hand-on-hover {\n  color: black;\n  transition: 0.1s;\n}\n\n.hand-on-hover:hover {\n  cursor: pointer;\n  background-color: gray;\n  color: white;\n  transition: 0.1s;\n}\n\n.bg-unique {\n  background-color: #3F729B;\n}\n\n.bg-unique-dark {\n  background-color: #1C2331;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2YXRpb25zL0Q6XFxNRUFOUHJvamVjdHNcXG1lbmJhcmJlcnMvc3JjXFxhcHBcXHJlc2VydmF0aW9uc1xccmVzZXJ2YXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNDLHlCQUFBO0FDQ0Q7O0FERUE7RUFDQyx5QkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYW5kLW9uLWhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246LjFzO1xyXG59XHJcblxyXG4uaGFuZC1vbi1ob3Zlcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogLjFzO1xyXG59ICAgXHJcblxyXG4uYmctdW5pcXVlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y3MjlCO1xyXG59XHJcblxyXG4uYmctdW5pcXVlLWRhcmsge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxQzIzMzE7XHJcbn0iLCIuaGFuZC1vbi1ob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuLmhhbmQtb24taG92ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuLmJnLXVuaXF1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjcyOUI7XG59XG5cbi5iZy11bmlxdWUtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzIzMzE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/reservations/reservations.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/reservations/reservations.component.ts ***!
    \********************************************************/

  /*! exports provided: ReservationsComponent */

  /***/
  function srcAppReservationsReservationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationsComponent", function () {
      return ReservationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_reservation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/reservation */
    "./src/app/models/reservation.ts");
    /* harmony import */


    var _models_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/style */
    "./src/app/models/style.ts");
    /* harmony import */


    var _services_reservation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/reservation.service */
    "./src/app/services/reservation.service.ts");
    /* harmony import */


    var _services_style_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/style.service */
    "./src/app/services/style.service.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var ReservationsComponent =
    /*#__PURE__*/
    function () {
      function ReservationsComponent(cdRef, reservationService, styleService, userService) {
        _classCallCheck(this, ReservationsComponent);

        this.cdRef = cdRef;
        this.reservationService = reservationService;
        this.styleService = styleService;
        this.userService = userService;
        this.reservations = [];
        this.previous = [];
        this.headElements = ['Client', 'Style', 'Date', 'Time', 'Status'];
        this.searchText = '';
        this.reservationStyle = [];
        this.styles = [];
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
      }

      _createClass(ReservationsComponent, [{
        key: "oninput",
        value: function oninput() {
          this.searchItems();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.getReservations();
          this.reservation = new _models_reservation__WEBPACK_IMPORTED_MODULE_3__["Reservation"]();
          this.reservationClient = new _models_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
          this.reservationStyle = new _models_style__WEBPACK_IMPORTED_MODULE_4__["Style"]();
          this.styleService.getStyles().subscribe(function (response) {
            _this24.styles = response;
          });

          if (!!localStorage.getItem('token')) {
            var id = localStorage.getItem('token');
            this.viewUser(id.slice(0, 24));
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
          this.mdbTablePagination.calculateFirstItemIndex();
          this.mdbTablePagination.calculateLastItemIndex();
          this.cdRef.detectChanges();
        }
      }, {
        key: "searchItems",
        value: function searchItems() {
          var prev = this.mdbTable.getDataSource();

          if (!this.searchText) {
            this.mdbTable.setDataSource(this.previous);
            this.reservations = this.mdbTable.getDataSource();
          }

          if (this.searchText) {
            this.reservations = this.mdbTable.searchLocalDataBy(this.searchText);
            this.mdbTable.setDataSource(prev);
          }
        }
      }, {
        key: "getReservation",
        value: function getReservation(id) {
          var _this25 = this;

          this.reservationService.getReservation(id).subscribe(function (response) {
            _this25.reservation = response[0];
            _this25.reservationClient = response[0].client_id;
            _this25.reservationStyle = response[0].style_id;
          });
        }
      }, {
        key: "getReservations",
        value: function getReservations() {
          var _this26 = this;

          this.reservationService.getReservations().subscribe(function (response) {
            _this26.reservations = response;

            _this26.mdbTable.setDataSource(_this26.reservations);

            _this26.reservations = _this26.mdbTable.getDataSource();
            _this26.previous = _this26.mdbTable.getDataSource();
          });
        }
      }, {
        key: "deleteReservation",
        value: function deleteReservation() {
          var _this27 = this;

          this.reservationService.deleteReservation(this.reservation._id).subscribe(function (response) {
            _this27.getReservations();
          });
        }
      }, {
        key: "updateReservation",
        value: function updateReservation() {
          var _this28 = this;

          this.newbookingdate = this.newbookingdate + ", " + this.newbookingtime;
          var reservation = new _models_reservation__WEBPACK_IMPORTED_MODULE_3__["Reservation"]();
          reservation._id = this.reservation._id;
          reservation.reservation_date = this.newbookingdate;
          reservation.total = this.reservation.total;
          reservation.status = this.reservation.status;
          reservation.client_id = this.reservationClient._id;
          reservation.style_id = this.editStyle;
          this.reservationService.updateReservation(reservation).subscribe(function (response) {
            _this28.getReservations();
          });
        }
      }, {
        key: "viewUser",
        value: function viewUser(id) {
          var _this29 = this;

          this.userService.viewUser(id).subscribe(function (response) {
            _this29.user = response[0];

            if (_this29.user.role == "client") {
              window.location.href = "/home";
            }
          });
        }
      }]);

      return ReservationsComponent;
    }();

    ReservationsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _services_reservation_service__WEBPACK_IMPORTED_MODULE_5__["ReservationService"]
      }, {
        type: _services_style_service__WEBPACK_IMPORTED_MODULE_6__["StyleService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTablePaginationComponent"], {
      static: true
    })], ReservationsComponent.prototype, "mdbTablePagination", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTableDirective"], {
      static: true
    })], ReservationsComponent.prototype, "mdbTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('input')], ReservationsComponent.prototype, "oninput", null);
    ReservationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-reservations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reservations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reservations/reservations.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reservations.component.scss */
      "./src/app/reservations/reservations.component.scss")).default]
    })], ReservationsComponent);
    /***/
  },

  /***/
  "./src/app/services/reservation.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/reservation.service.ts ***!
    \*************************************************/

  /*! exports provided: ReservationService */

  /***/
  function srcAppServicesReservationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationService", function () {
      return ReservationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ReservationService =
    /*#__PURE__*/
    function () {
      function ReservationService(http) {
        _classCallCheck(this, ReservationService);

        this.http = http;
        this.url = "http://localhost:80";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
      }

      _createClass(ReservationService, [{
        key: "getReservations",
        value: function getReservations() {
          return this.http.get(this.url + "/reservation");
        }
      }, {
        key: "getReservation",
        value: function getReservation(id) {
          return this.http.get(this.url + "/reservation/" + id);
        }
      }, {
        key: "deleteReservation",
        value: function deleteReservation(id) {
          return this.http.delete(this.url + "/reservation/" + id);
        }
      }, {
        key: "addReservation",
        value: function addReservation(reservation) {
          return this.http.post(this.url + "/reservation", reservation, {
            headers: this.headers
          });
        }
      }, {
        key: "updateReservation",
        value: function updateReservation(reservation) {
          return this.http.put(this.url + "/reservation/" + reservation._id, reservation, {
            headers: this.headers
          });
        }
      }, {
        key: "getUserReservations",
        value: function getUserReservations(id) {
          return this.http.get(this.url + "/reservation/userreservations/" + id);
        }
      }, {
        key: "addCountToStyle",
        value: function addCountToStyle(reservation) {
          return this.http.put(this.url + "/reservation/incToSTyle/" + reservation.style_id, reservation, {
            headers: this.headers
          });
        }
      }, {
        key: "getReservationDate",
        value: function getReservationDate(date) {
          return this.http.get(this.url + "/reservation/getdate/" + date);
        }
      }, {
        key: "getCompletedReservations",
        value: function getCompletedReservations() {
          return this.http.get(this.url + '/reservation/completedreservation');
        }
      }, {
        key: "getStylesStats",
        value: function getStylesStats(id) {
          return this.http.get(this.url + '/reservation/stylecount/' + id);
        }
      }, {
        key: "getReservationsToday",
        value: function getReservationsToday() {
          return this.http.get(this.url + "/reservation/reservationstoday");
        }
      }]);

      return ReservationService;
    }();

    ReservationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ReservationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReservationService);
    /***/
  },

  /***/
  "./src/app/services/style.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/style.service.ts ***!
    \*******************************************/

  /*! exports provided: StyleService */

  /***/
  function srcAppServicesStyleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleService", function () {
      return StyleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var StyleService =
    /*#__PURE__*/
    function () {
      function StyleService(http) {
        _classCallCheck(this, StyleService);

        this.http = http;
        this.url = "http://localhost:80";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
      }

      _createClass(StyleService, [{
        key: "getStyles",
        value: function getStyles() {
          return this.http.get(this.url + "/style");
        }
      }, {
        key: "getTrendingStyles",
        value: function getTrendingStyles() {
          return this.http.get(this.url + "/style/trending");
        }
      }, {
        key: "getStyle",
        value: function getStyle(id) {
          return this.http.get(this.url + "/style/" + id);
        }
      }]);

      return StyleService;
    }();

    StyleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StyleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StyleService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.url = "http://localhost:80";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
      }

      _createClass(UserService, [{
        key: "addUser",
        value: function addUser(user) {
          return this.http.post(this.url + "/user", user, {
            headers: this.headers
          });
        }
      }, {
        key: "login",
        value: function login(user) {
          return this.http.post(this.url + "/user/login", user, {
            headers: this.headers
          });
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return !!localStorage.getItem('token');
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
          this.user._id = user._id;
          this.user.firstname = user.firstname;
          this.user.middlename = user.middlename;
          this.user.lastname = user.lastname;
          this.user.phone = user.phone;
          this.user.email = user.email;
          this.user.role = user.role;
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.user;
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.url + "/user");
        } // Admin functions for user management

      }, {
        key: "viewUser",
        value: function viewUser(id) {
          return this.http.get(this.url + "/user/" + id);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.http.put(this.url + "/user/" + user._id, user, {
            headers: this.headers
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http.delete(this.url + "/user/" + id);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/styles/styles.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/styles/styles.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStylesStylesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".descriptionContainer {\n  margin-top: 2%;\n}\n\n.cards-container {\n  margin-top: 80px;\n  margin-bottom: 20px;\n}\n\n.bg-unique {\n  background-color: #3F729B;\n}\n\n.bg-unique-dark {\n  background-color: #1C2331;\n}\n\n.trendingstylesImg {\n  border-radius: 5px;\n}\n\n.paragraph {\n  color: transparent;\n}\n\n.paragraph:before {\n  content: attr(data-text);\n  position: absolute;\n  -webkit-animation: type 5s steps(48);\n          animation: type 5s steps(48);\n  width: 100%;\n  height: 100%;\n  color: white;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.container {\n  width: 100%;\n}\n\n@-webkit-keyframes type {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 100%;\n  }\n  0% {\n    width: 0;\n  }\n}\n\n@keyframes type {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 100%;\n  }\n  0% {\n    width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL0Q6XFxNRUFOUHJvamVjdHNcXG1lbmJhcmJlcnMvc3JjXFxhcHBcXHN0eWxlc1xcc3R5bGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHlsZXMvc3R5bGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0MseUJBQUE7QUNDRDs7QURFQTtFQUNDLHlCQUFBO0FDQ0Q7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7QUNHSjs7QUREQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBRERBO0VBRUE7SUFFSSxRQUFBO0VDRUY7RURBRjtJQUVJLFdBQUE7RUNDRjtFRENGO0lBRUksUUFBQTtFQ0FGO0FBQ0Y7O0FEYkE7RUFFQTtJQUVJLFFBQUE7RUNFRjtFREFGO0lBRUksV0FBQTtFQ0NGO0VEQ0Y7SUFFSSxRQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3N0eWxlcy9zdHlsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb25Db250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLmNhcmRzLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAgICBcclxufVxyXG5cclxuLmJnLXVuaXF1ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzNGNzI5QjtcclxufVxyXG5cclxuLmJnLXVuaXF1ZS1kYXJrIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyMzMxO1xyXG59XHJcbi50cmVuZGluZ3N0eWxlc0ltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ucGFyYWdyYXBoe1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5wYXJhZ3JhcGg6YmVmb3Jle1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYW5pbWF0aW9uOiB0eXBlIDVzIHN0ZXBzKDQ4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgXHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGVcclxueyBcclxuMCUgICBcclxuICAgIHtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcbjUwJVxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4wJVxyXG57XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG59IiwiLmRlc2NyaXB0aW9uQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5jYXJkcy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYmctdW5pcXVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNzI5Qjtcbn1cblxuLmJnLXVuaXF1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMjMzMTtcbn1cblxuLnRyZW5kaW5nc3R5bGVzSW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucGFyYWdyYXBoIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFyYWdyYXBoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb246IHR5cGUgNXMgc3RlcHMoNDgpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQGtleWZyYW1lcyB0eXBlIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/styles/styles.component.ts":
  /*!********************************************!*\
    !*** ./src/app/styles/styles.component.ts ***!
    \********************************************/

  /*! exports provided: StylesComponent */

  /***/
  function srcAppStylesStylesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StylesComponent", function () {
      return StylesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/style */
    "./src/app/models/style.ts");
    /* harmony import */


    var _services_style_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/style.service */
    "./src/app/services/style.service.ts");
    /* harmony import */


    var _models_reservation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/reservation */
    "./src/app/models/reservation.ts");
    /* harmony import */


    var _services_reservation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/reservation.service */
    "./src/app/services/reservation.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var StylesComponent =
    /*#__PURE__*/
    function () {
      function StylesComponent(styleService, reservationService, userService) {
        _classCallCheck(this, StylesComponent);

        this.styleService = styleService;
        this.reservationService = reservationService;
        this.userService = userService;
        this.style = new _models_style__WEBPACK_IMPORTED_MODULE_2__["Style"]();
        this.reservationTime = [];
        this.timeUnavailable = [];
        this.timeAvailable = [];
      }

      _createClass(StylesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getStyles();
        }
      }, {
        key: "getStyles",
        value: function getStyles() {
          var _this30 = this;

          this.styleService.getStyles().subscribe(function (response) {
            _this30.styles = response;
          });
        }
      }, {
        key: "getStyle",
        value: function getStyle(id) {
          var _this31 = this;

          this.styleService.getStyle(id).subscribe(function (response) {
            _this31.style.name = response[0].name;
            _this31.style.description = response[0].description;
            _this31.style.price = response[0].price;
            _this31.style.image = response[0].image;
            _this31.style._id = response[0]._id;
          });
        }
      }, {
        key: "submitBooking",
        value: function submitBooking() {
          var _this32 = this;

          var reservation = new _models_reservation__WEBPACK_IMPORTED_MODULE_4__["Reservation"]();
          this.bookingdate = this.bookingdate + ", " + this.bookingtime;
          reservation.reservation_date = this.bookingdate;
          var id = localStorage.getItem('token');
          reservation.client_id = id.slice(0, 24);
          reservation.style_id = this.style._id;
          reservation.total = this.style.price;
          reservation.status = "Reserved";
          this.reservationService.addReservation(reservation).subscribe(function (response) {
            if (response.msg == 'success') {
              _this32.reservationService.addCountToStyle(reservation).subscribe(function (response) {});
            }
          });
        }
      }, {
        key: "getReservationDate",
        value: function getReservationDate() {
          var _this33 = this;

          this.bookingdate = this.bookingdate;
          this.reservationService.getReservationDate(this.bookingdate).subscribe(function (response) {
            _this33.reservationTime = response;
          });
        }
      }]);

      return StylesComponent;
    }();

    StylesComponent.ctorParameters = function () {
      return [{
        type: _services_style_service__WEBPACK_IMPORTED_MODULE_3__["StyleService"]
      }, {
        type: _services_reservation_service__WEBPACK_IMPORTED_MODULE_5__["ReservationService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }];
    };

    StylesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-styles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./styles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/styles/styles.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles.component.scss */
      "./src/app/styles/styles.component.scss")).default]
    })], StylesComponent);
    /***/
  },

  /***/
  "./src/app/user.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/user.guard.ts ***!
    \*******************************/

  /*! exports provided: UserGuard */

  /***/
  function srcAppUserGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGuard", function () {
      return UserGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");

    var UserGuard =
    /*#__PURE__*/
    function () {
      function UserGuard(userService, router) {
        _classCallCheck(this, UserGuard);

        this.userService = userService;
        this.router = router;
      }

      _createClass(UserGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.userService.loggedIn()) {
            return true;
          } else {
            this.router.navigate(["/home"]);
            return false;
          }
        }
      }]);

      return UserGuard;
    }();

    UserGuard.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UserGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserGuard);
    /***/
  },

  /***/
  "./src/app/users/users.component.scss":
  /*!********************************************!*\
    !*** ./src/app/users/users.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hand-on-hover {\n  color: black;\n  transition: 0.1s;\n}\n\n.hand-on-hover:hover {\n  cursor: pointer;\n  background-color: gray;\n  color: white;\n  transition: 0.1s;\n}\n\n.bg-unique {\n  background-color: #3F729B;\n}\n\n.bg-unique-dark {\n  background-color: #1C2331;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvRDpcXE1FQU5Qcm9qZWN0c1xcbWVuYmFyYmVycy9zcmNcXGFwcFxcdXNlcnNcXHVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDQyx5QkFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbmQtb24taG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjouMXM7XHJcbn1cclxuXHJcbi5oYW5kLW9uLWhvdmVyOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAuMXM7XHJcbn0gICBcclxuXHJcbi5iZy11bmlxdWUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzRjcyOUI7XHJcbn1cclxuXHJcbi5iZy11bmlxdWUtZGFyayB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFDMjMzMTtcclxufSIsIi5oYW5kLW9uLWhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuXG4uaGFuZC1vbi1ob3Zlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuXG4uYmctdW5pcXVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNzI5Qjtcbn1cblxuLmJnLXVuaXF1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMjMzMTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(cdRef, userService) {
        _classCallCheck(this, UsersComponent);

        this.cdRef = cdRef;
        this.userService = userService;
        this.users = [];
        this.previous = [];
        this.headElements = ['Name', 'Phone', 'Email'];
        this.searchText = '';
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.style = [];
        this.styles = [];
      }

      _createClass(UsersComponent, [{
        key: "oninput",
        value: function oninput() {
          this.searchItems();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();

          if (!!localStorage.getItem('token')) {
            var id = localStorage.getItem('token');
            this.viewUser(id.slice(0, 24));
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
          this.mdbTablePagination.calculateFirstItemIndex();
          this.mdbTablePagination.calculateLastItemIndex();
          this.cdRef.detectChanges();
        }
      }, {
        key: "searchItems",
        value: function searchItems() {
          var prev = this.mdbTable.getDataSource();

          if (!this.searchText) {
            this.mdbTable.setDataSource(this.previous);
            this.users = this.mdbTable.getDataSource();
          }

          if (this.searchText) {
            this.users = this.mdbTable.searchLocalDataBy(this.searchText);
            this.mdbTable.setDataSource(prev);
          }
        } // Admin functions for user management

      }, {
        key: "viewUser",
        value: function viewUser(id) {
          var _this34 = this;

          this.userService.viewUser(id).subscribe(function (response) {
            _this34.user = response[0];

            if (_this34.user.role == "client") {
              window.location.href = "/home";
            }
          });
        }
      }, {
        key: "editUser",
        value: function editUser() {
          this.editFirstname = this.user.firstname;
          this.editMiddlename = this.user.middlename;
          this.editLastname = this.user.lastname;
          this.editPhone = this.user.phone;
          this.editEmail = this.user.email;
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this35 = this;

          this.user.firstname = this.editFirstname;
          this.user.middlename = this.editMiddlename;
          this.user.lastname = this.editLastname;
          this.user.phone = this.editPhone;
          this.user.email = this.editEmail;
          this.userService.updateUser(this.user).subscribe(function (response) {
            _this35.getUsers();
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser() {
          var _this36 = this;

          this.userService.deleteUser(this.user._id).subscribe(function (response) {
            _this36.getUsers();
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this37 = this;

          this.userService.getUsers().subscribe(function (response) {
            _this37.users = response;

            _this37.mdbTable.setDataSource(_this37.users);

            _this37.users = _this37.mdbTable.getDataSource();
            _this37.previous = _this37.mdbTable.getDataSource();
          });
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTablePaginationComponent"], {
      static: true
    })], UsersComponent.prototype, "mdbTablePagination", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTableDirective"], {
      static: true
    })], UsersComponent.prototype, "mdbTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('input')], UsersComponent.prototype, "oninput", null);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.scss */
      "./src/app/users/users.component.scss")).default]
    })], UsersComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\MEANProjects\menbarbers\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map