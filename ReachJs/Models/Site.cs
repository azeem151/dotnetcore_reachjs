using System;
using System.Collections.Generic;

namespace ReachJs.Models
{
    public class Site
    {
        public int Id { get; set; }

        public String Name { get; set; }

        public List<Pump> Pumps { get; set; }
   
    }
}

