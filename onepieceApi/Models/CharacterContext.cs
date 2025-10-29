#nullable disable
using Microsoft.EntityFrameworkCore;
namespace onepieceApi.Models;
public class CharacterContext : DbContext
{
  public CharacterContext(DbContextOptions<CharacterContext> options) : base(options) { }

  public DbSet<onepieceApi.Models.Character> Characters { get; set; }
}