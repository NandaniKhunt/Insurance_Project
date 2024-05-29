using InsuranceProject.Logic.Implementation;
using InsuranceProject.Logic.Interface;
using InsuranceProject.Models.Custom;
using System.Web.Mvc;
namespace InsuranceProject.Controllers
{
    public class DriverController : Controller
    {
        IDriverService DriverServices = new DriverServices();
        // GET: Driver
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Add()
        {
            return View();
        }
        [HttpGet]
        public JsonResult Getstate()
        {
            var data = DriverServices.GetState();
            return Json(data,JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Add(DriverModel model)
        {
            DriverServices.Insert(model);
            return View();
        }

    }
}