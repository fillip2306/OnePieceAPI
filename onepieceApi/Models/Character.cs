using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using onepieceApi.Interfaces;
namespace onepieceApi.Models;

public class Character : ICharacter
{
  [Key]
  public int Id { get; set; }
  public string Name { get; set; } = string.Empty;
  public int Age { get; set; }

  [JsonPropertyName("livingStatus")]
  public bool IsLiving { get; set; }

  private string _imageUrl;
  public string? ImageUrl
  {
    get
    {
      return _imageUrl;
    }
    set
    {
      if (!string.IsNullOrEmpty(value))
      {
        _imageUrl = value;
      }
      else
      {
        Console.WriteLine("Image URL not provided, using default placeholder.");
        _imageUrl = "/cute-ghost.png";
      }
    }
  }

  public Character() { }
  
  public Character(int id, string name, int age, bool isLiving, string? imageUrl)
  {
    Id = id;
    Name = name;
    Age = age;
    IsLiving = isLiving;
    ImageUrl = imageUrl;
  } 
}
