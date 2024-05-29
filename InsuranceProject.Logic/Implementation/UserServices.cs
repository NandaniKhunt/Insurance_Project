using InsuranceProject.Logic.Interface;
using InsuranceProject.Models;
using InsuranceProject.Models.Database;
using System;
using System.Linq;
namespace InsuranceProject.Logic.Implementation
{
   public class UserServices : BaseServices, IUserServices
    {
        public Login Authentication(string userName, string password)
        {
            var returnitem = db.Login.FirstOrDefault(f => f.UserName == userName && f.Password == password);
            if (returnitem != null)
            {
                returnitem.LastLoginTime = DateTime.UtcNow;
                returnitem.LoginHistory = "";
                db.SaveChanges();
                return returnitem;
            }
            return null;
        }
    }
}
