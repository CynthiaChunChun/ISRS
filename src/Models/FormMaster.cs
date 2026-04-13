using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ISRS.Models
{
    [Table("SEC_FORMS_MASTER")]
    public class FormMaster
    {
        [Key]
        [Column("FORM_ID")]
        [Required]
        [StringLength(50)]
        public string FormId { get; set; }

        [Column("DOC_NO")]
        [Required]
        [StringLength(20)]
        public string DocumentNumber { get; set; }

        [Column("APPLY_DATE")]
        [Required]
        public DateTime ApplyDate { get; set; }

        [Column("STATUS")]
        [Required]
        [StringLength(20)]
        public string Status { get; set; }

        [Column("COMMENTS", TypeName = "CLOB")]
        [DataType(DataType.MultilineText)]
        public string Comments { get; set; }

        [InverseProperty("FormMaster")]
        public virtual FirewallForm FirewallForm { get; set; }
    }
