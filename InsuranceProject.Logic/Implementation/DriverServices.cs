using InsuranceProject.Logic.Interface;
using InsuranceProject.Models;
using InsuranceProject.Models.Custom;
using InsuranceProject.Models.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace InsuranceProject.Logic.Implementation
{
    public class DriverServices : BaseServices, IDriverService
    {
        public List<string> GetState()
        {
            return db.State.Select(s => s.Name).ToList();
        }
        public void Insert(DriverModel model)
        {
            var state = db.State.Where(s => s.Name == model.StateName).FirstOrDefault();
            var newDriver = new Driver
            {     
                StateId= state.Id,
                LicenseNo = model.LicenseNo,
                Status =model.Status,
                DOB=model.DOB,
                FirstName=model.FirstName,
                LastName=model.LastName,
                Gender=model.Gender,
                MaritalStatus=model.MaritalStatus,
                HomeType=model.HomeType,
                HomeStatusType=model.HomeStatusType,
                Education=model.Education,
                Occupation=model.Occupation
            };
            model.IsDeleted = false;
            db.Driver.Add(newDriver);
            db.SaveChanges();
        }
    }
}
