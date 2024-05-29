using InsuranceProject.Logic.Interface;
using InsuranceProject.Models;
using InsuranceProject.Models.Custom;
using InsuranceProject.Models.Database;
using System.Collections.Generic;
using System.Linq;
namespace InsuranceProject.Logic.Implementation
{
    public class VehicalServices : BaseServices, IVehicalServices
    {
        public List<string> GetMake(int year)
        {
            return db.VIN.Where(v => v.Year == year).Select(v => v.Make).ToList();
        }
        public List<string> GetModels(int year, string make)
        {
            return db.VIN.Where(v => v.Year == year && v.Make == make).Select(v => v.Model).ToList();
        }
        public string GetVin(int year, string make, string model)
        {
            return db.VIN.Where(v => v.Year == year && v.Make == make && v.Model == model)
                         .Select(v => v.VIN1)
                         .FirstOrDefault();
        }
        public VehicalModel GetVehicleDetailsByVin(string vin)
        {
            return db.VIN.Where(v => v.VIN1 == vin)
                         .Select(v => new VehicalModel
                         {
                             Year = (int)v.Year,
                             Make = v.Make,
                             Model = v.Model
                         })
                         .FirstOrDefault();
        }
        public void Insert(VehicalModel vmodel)
        {
            var newvehicle = new Vehical
            {
                VIN = vmodel.VIN,
                Year = vmodel.Year,
                Make= vmodel.Make,
                Model= vmodel.Model,
                VehicalUse=vmodel.VehicleUse,
                Ownership= vmodel.Ownership,
                ApplicantId=vmodel.ApplicatId,
                IsDeleted = false
            };
            vmodel.IsDeleted = false;
            db.Vehical.Add(newvehicle);
            db.SaveChanges();
        }
    } 
}

