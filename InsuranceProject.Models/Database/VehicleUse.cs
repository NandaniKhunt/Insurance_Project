//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace InsuranceProject.Models.Database
{
    using System;
    using System.Collections.Generic;
    
    public partial class VehicleUse
    {
        public VehicleUse()
        {
            this.Vehicals = new HashSet<Vehical>();
        }
    
        public int Id { get; set; }
        public string Type { get; set; }
    
        public virtual ICollection<Vehical> Vehicals { get; set; }
    }
}
