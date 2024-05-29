using InsuranceProject.Logic.Implementation;
using InsuranceProject.Logic.Interface;
using InsuranceProject.Models;
using InsuranceProject.Models.Custom;
using System.Web.Mvc;
namespace InsuranceProject.Controllers
{
    public class HomeController : Controller
    {
        IUserServices userServices = new UserServices();
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(LoginModel model)
        {
            var user = userServices.Authentication(model.UserName, model.Password);
            if (user != null)
            {
                ProjectSession.Login = user;
                 return RedirectToAction("Index", "Dashboard");               
            }
           ViewBag.ErrorMessage = "Incorrect username or password.";
           return View("Index");            
        }       
        public ActionResult Logout()
        {
            ProjectSession.Login = null;
            return RedirectToAction("Index");
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }
    }
}