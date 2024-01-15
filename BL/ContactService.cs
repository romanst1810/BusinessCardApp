using System;
using System.Threading.Tasks;
using Core;
using Core.Interfaces;
using Core.Models;
using DAL;

namespace BL
{
    public class ContactService : IContactService
    {
        private readonly ContactContext _context;

        public ContactService(ContactContext context)
        {
            _context = context;
        }

        public async Task<bool> AddContact(Contact contact)
        {
            _context.Contacts.Add(contact);
            var saveResult = await _context.SaveChangesAsync();
            return saveResult == 1;
        }
    }
}
