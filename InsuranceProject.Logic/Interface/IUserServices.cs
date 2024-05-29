using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsuranceProject.Models.Database;

namespace InsuranceProject.Logic.Interface
{
    public interface IUserServices
    {
        Login Authentication(string userName, string password);
    }
}
