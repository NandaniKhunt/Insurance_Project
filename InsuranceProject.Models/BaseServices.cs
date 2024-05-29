using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InsuranceProject.Models
{
    public class BaseServices
    {
        private InsuranceProjectContext _db;

        public InsuranceProjectContext db
        {
            get => _db ?? (_db = new InsuranceProjectContext());
            set { _db = value; }
        }

        
    }
}
