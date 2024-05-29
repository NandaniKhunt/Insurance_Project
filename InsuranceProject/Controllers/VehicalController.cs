using InsuranceProject.Logic.Implementation;
using InsuranceProject.Logic.Interface;
using InsuranceProject.Models.Custom;
using System.Web.Mvc;
namespace InsuranceProject.Controllers
{
    public class VehicalController : Controller
    {
        IVehicalServices VehicalServices = new VehicalServices();
        // GET: Vehical
        [HttpGet]
        public ActionResult Index(int? applicantId)
        {
            Session["ApplicantId"] = applicantId;
            return View();
        }
        public ActionResult Add()
        {
            return View();
        }
        [HttpGet]
        public JsonResult GetMake(int year)
        {
            var makes = VehicalServices.GetMake(year);
            return Json(makes, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetModels(int year, string make)
        {
            var models = VehicalServices.GetModels(year, make);
            return Json(models, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetVin(int year, string make, string model)
        {
            var vin = VehicalServices.GetVin(year, make, model);
            return Json(vin, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetVehicleDetailsByVin(string vin)
        {
            var vehicleDetails = VehicalServices.GetVehicleDetailsByVin(vin);
            return Json(vehicleDetails, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Add(VehicalModel vmodel)
        {
            int? applicantId = Session["ApplicantId"] as int?;
            vmodel.ApplicatId = (int)applicantId;
            VehicalServices.Insert(vmodel);
            return View();
        }
    }
}
