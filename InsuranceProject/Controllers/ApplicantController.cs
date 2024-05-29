using InsuranceProject.Logic.Implementation;
using InsuranceProject.Logic.Interface;
using InsuranceProject.Models.Custom;
using System.Web.Mvc;
namespace InsuranceProject.Controllers
{
    public class ApplicantController : Controller
    {
        IApplicantService ApplicantServices = new ApplicantServices();
        // GET: Applicant
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Add()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Add(ApplicantModel model)
        {
            if (ModelState.IsValid)
            {
                var result = ApplicantServices.Insert(model);
                return RedirectToAction("Index", "Vehical", new { applicantId = result });
            }
            return View(model);
        }
    }
}













