using System;
using System.Collections.Generic;
using InsuranceProject.Models.Database;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsuranceProject.Models.Custom;

namespace InsuranceProject.Logic.Interface
{
    public interface IVehicalServices
    {
        List<string> GetMake(int year);
        List<string> GetModels(int year, string make);

        string GetVin(int year, string make, string model);

        VehicalModel GetVehicleDetailsByVin(string vin);

        void Insert(VehicalModel vmodel);
    }
}
