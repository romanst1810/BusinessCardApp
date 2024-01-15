using System.ComponentModel.DataAnnotations;

namespace Core.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string FirstName { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Phone]
        public string PhoneNumber { get; set; }
    }
}
