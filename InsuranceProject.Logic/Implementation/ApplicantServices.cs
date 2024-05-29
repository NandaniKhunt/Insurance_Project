using InsuranceProject.Logic.Interface;
using InsuranceProject.Models;
using InsuranceProject.Models.Custom;
using InsuranceProject.Models.Database;
namespace InsuranceProject.Logic.Implementation
{
    public class ApplicantServices : BaseServices, IApplicantService
    {
        public int Insert(ApplicantModel model)
        {           
            var NewApplicant = new Applicant
            {
                EffectiveDate = model.EffectiveDate,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                PhoneNo = model.PhoneNo,
                GaragingAddress = model.GaragingAddress,
                ApartmentAddress = model.ApartmentAddress,
                Zipcode = model.Zipcode,
                City = model.City,
                State = model.State,
                MailAddress = model.MailAddress,
                MailApartment = model.MailApartment,
                MailZipcode = model.MailZipcode,
                Mailcity=model.Mailcity,
                MailState=model.MailState,
                IsDeleted = false
            };
            model.IsDeleted = false;
            db.Applicant.Add(NewApplicant);
            db.SaveChanges();
            return NewApplicant.Id;

        }      
    }    
}
