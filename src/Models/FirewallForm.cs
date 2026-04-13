using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ISRS.Models
{
    [Table("SEC_DATA_FIREWALL")]
    public class FirewallForm
    {
        [Key]
        [Column("FORM_ID")]
        [Required]
        [StringLength(50)]
        [ForeignKey("FormMaster")]
        public string FormId { get; set; }

        [Column("SOURCE_IP")]
        [Required]
        [StringLength(45)]
        public string SourceIp { get; set; }

        [Column("DESTINATION_IP")]
        [Required]
        [StringLength(45)]
        public string DestinationIp { get; set; }

        [Column("PORT")]
        [Required]
        [StringLength(10)]
        public string Port { get; set; }

        [Column("VERSION")]
        [Required]
        [StringLength(10)]
        public string Version { get; set; }

        [InverseProperty("FirewallForm")]
        public virtual FormMaster FormMaster { get; set; }
    }
