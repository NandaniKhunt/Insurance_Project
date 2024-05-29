using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsuranceProject.Models.Database;
using System.Web;
namespace InsuranceProject.Models
{
    public class ProjectSession
    {   
        public static Login Login
        {
            get
            {
                if (HttpContext.Current.Session["Login"] == null)
                {
                    return null;
                }
                return (Login)HttpContext.Current.Session["Login"];
            }
            set
            {
                HttpContext.Current.Session["Login"] = value;
            }
        }
       
    }
}
