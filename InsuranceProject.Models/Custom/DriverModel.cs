using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace InsuranceProject.Models.Custom
{
   public class DriverModel
    {
        public string StateName { get; set; }
        public string LicenseNo { get; set; }
        public string Status { get; set; }
        public DateTime DOB { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string MaritalStatus { get; set; }
        public string HomeType { get; set; }
        public string HomeStatusType { get; set; }
        public string Education { get; set; }
        public string Occupation { get; set; }
        public bool IsDeleted { get; set; }
    }
}
