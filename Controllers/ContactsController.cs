using BL;
using Core;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Core.Interfaces;
using Core.Models;

namespace BusinessCardApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactsController(ContactService contactService)
        {
            _contactService = contactService;
        }
        [HttpGet]
        public string Get()
        {
            return "test is ok";
        }

        [HttpPost]
        public async Task<bool> PostContact(Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return false;
            }

            var result = true;
           //var result = await _contactService.AddContact(contact);

            if (result)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
