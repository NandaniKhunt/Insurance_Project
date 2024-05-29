using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsuranceProject.Models.Custom;
using InsuranceProject.Models.Database;

namespace InsuranceProject.Logic.Interface
{
    public interface IApplicantService
    {
        int Insert(ApplicantModel model);
    }
}
