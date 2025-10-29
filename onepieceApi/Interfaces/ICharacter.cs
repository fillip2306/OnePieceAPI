namespace onepieceApi.Interfaces
{
    public interface ICharacter
    {
        int Id { get; set; }
        string Name { get; set; }
        int Age { get; set; }
        bool IsLiving { get; set; }
        string? ImageUrl { get; set; }
    }
}