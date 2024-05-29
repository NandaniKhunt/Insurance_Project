using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace InsuranceProject.Models.Custom
{
    public class VehicalModel
    {
        public string VIN { get; set; }
        public int Year { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string VehicleUse { get; set; }
        public int VehicleUseId { get; set; }     
        public string Ownership { get; set; }

       public int ApplicatId { get; set; }
        public bool IsDeleted { get; set; }
    }
}
