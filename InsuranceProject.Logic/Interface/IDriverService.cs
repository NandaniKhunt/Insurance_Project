using InsuranceProject.Models.Custom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InsuranceProject.Logic.Interface
{
    public interface IDriverService
    {
        List<string> GetState();
        void Insert(DriverModel model);
    }
}
