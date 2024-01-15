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
        public async Task<IActionResult> PostContact(Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _contactService.AddContact(contact);

            if (result)
            {
                return Ok();
            }
            else
            {
                return StatusCode(500, "An error occurred while handling your request.");
            }
        }
    }
}
