using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReachJs.IRepositories;
using ReachJs.Repositories;
using ReachJs.Models;

namespace ReachJs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SiteController : ControllerBase
    {
        private ISiteRepository siteRepository;

        public SiteController()
        {
            this.siteRepository = new SiteRepository();
        }

        // GET: api/Site
        [HttpGet]
        public IEnumerable<Site> Get()
        {
            return this.siteRepository.GetSites();
        }

        // GET: api/Site/id/5
        [HttpGet("Id/{id}", Name = "GetById")]
        public Site GetById(int id)
        {
            return this.siteRepository.GetSiteByID(id);
        }

        // GET: api/Site/name/name
        [HttpGet("Name/{name}", Name = "GetByName")]
        public IEnumerable<Site> GetByName(string name)
        {
            return this.siteRepository.GetSitesByName(name);
        }
    }
}
