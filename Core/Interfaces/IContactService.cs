using System.Threading.Tasks;
using Core.Models;

namespace Core.Interfaces
{
    public interface IContactService
    {
        public Task<bool> AddContact(Contact contact);
    }
}