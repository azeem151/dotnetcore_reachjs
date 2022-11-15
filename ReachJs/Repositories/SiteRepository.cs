using System;
using System.Collections.Generic;
using System.Linq;
using ReachJs.IRepositories;
using ReachJs.Models;

namespace ReachJs.Repositories
{
    public class SiteRepository: ISiteRepository, IDisposable
    {
        List<Site> sites = new List<Site>
        {
            new Site{ Id = 1, Name  = "ASite1", Pumps = new List<Pump>{ new Pump{ Id = 1, Name = "Pump1" }, new Pump { Id = 2, Name = "Pump2" } } },
            new Site{ Id = 2, Name  = "BSite2", Pumps = new List<Pump>{ new Pump{ Id = 3, Name = "Pump3" }, new Pump { Id = 4, Name = "Pump4" } } },
            new Site{ Id = 3, Name  = "CSite3", Pumps = new List<Pump>{ new Pump{ Id = 5, Name = "Pump5" }} },

        };

        public SiteRepository()
        {
            
        }

        public IEnumerable<Site> GetSitesByName(string name)
        {
            List<Site> result = sites.Where(s => s.Name.StartsWith(name, StringComparison.CurrentCultureIgnoreCase)).ToList();

            return result;
        }

        void IDisposable.Dispose()
        {
            throw new NotImplementedException();
        }

        Site ISiteRepository.GetSiteByID(int siteId)
        {
            return this.sites.Find(x => x.Id == siteId);
        }

        IEnumerable<Site> ISiteRepository.GetSites()
        {
            return sites;
        }
    }
}

