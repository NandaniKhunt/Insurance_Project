using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsuranceProject.Models.Database;
using System.Data.Entity;

namespace InsuranceProject.Models
{
   public partial class InsuranceProjectContext : DbContext
    {
        public InsuranceProjectContext()
           : base("name=InsuranceDBEntities")
        {
            this.Configuration.ValidateOnSaveEnabled = false;
        }

        public DbSet<Login> Login { get; set; }
        public DbSet<Applicant> Applicant { get; set; }
        public DbSet<VehicleUse> VehicleUse { get; set; }
        public DbSet<VIN> VIN { get; set; }
        public DbSet<Vehical> Vehical { get; set; }

        public DbSet<Driver> Driver { get; set; }
        public DbSet<State> State { get; set; }


    }
}
