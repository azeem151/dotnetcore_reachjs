using System;
using System.Collections.Generic;
using ReachJs.Models;

namespace ReachJs.IRepositories
{
    public interface ISiteRepository: IDisposable
    {
        IEnumerable<Site> GetSites();
        Site GetSiteByID(int siteId);
        IEnumerable<Site> GetSitesByName(string name);
    }
}