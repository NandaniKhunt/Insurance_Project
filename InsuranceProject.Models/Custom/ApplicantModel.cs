using System;
using System.ComponentModel.DataAnnotations;
namespace InsuranceProject.Models.Custom
{
    public class ApplicantModel
    {      
        public int Id { get; set; }

        [Required(ErrorMessage = "* Effective Date is required")]
        [DataType(DataType.Date)]
        public DateTime EffectiveDate { get; set; }

        [Required(ErrorMessage = "* FirstName is required")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "* LastName is required")]
        public string LastName { get; set; }

        [Required(ErrorMessage ="* Email is Required")]
        [RegularExpression(@"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}", ErrorMessage = "Invalid Formate Of Email ")]
        public string Email { get; set; }

        [Required(ErrorMessage ="* PhoneNo is Required")]
        [StringLength(10, ErrorMessage = "10 Number Required")]
        [RegularExpression(@"^([0-9]{10})$", ErrorMessage = "Invalid Phone Number.")]
        public string PhoneNo { get; set; }

        [Required(ErrorMessage = "* GaragingAddress is required")]
        public string GaragingAddress { get; set; }
        
        [Required(ErrorMessage = "* Address is required")]
        public string ApartmentAddress { get; set; }

        [Required(ErrorMessage ="* zipcode is required")]
        public string Zipcode { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string MailAddress { get; set; }
        public string MailApartment { get; set; }
        public int? MailZipcode { get; set; }
        public string Mailcity { get; set; }
        public string MailState { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
    }
}
