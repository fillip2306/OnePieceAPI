using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using onepieceApi.Interfaces;
using onepieceApi.Models;
using Microsoft.EntityFrameworkCore;

namespace onepieceApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly CharacterContext context;
        public CharacterController(CharacterContext _context) // Dependency injection
        {
            context = _context;
        }

        // GET: api/character
        [HttpGet]
        public async Task<ActionResult<List<Character>>> GetAll()
        {
            List<Character> characters = await context.Characters.ToListAsync();
            return Ok(characters);
        }
        
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Character>> GetById(int id)
        {
            var character = await context.Characters.FindAsync(id);
            if (character == null)
                return NotFound($"Character with id {id} not found.");
            return Ok(character);
        }
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteCharacter(int id)
        {
            var character = await context.Characters.FindAsync(id);
            if (character == null)
                return NotFound($"Character with id {id} not found.");

            context.Characters.Remove(character);
            await context.SaveChangesAsync();

            return NoContent(); // 204 = successfully deleted
        }

        [HttpPost]
        public async Task<ActionResult<Character>> AddCharacter([FromBody] Character character)
        {
            if (character == null)
                return BadRequest("Character cannot be null.");

            // EF automatically assigns an ID if configured (auto-increment)
            context.Characters.Add(character);
            await context.SaveChangesAsync();

            // Return 201 Created with location header
            return CreatedAtAction(nameof(GetById), new { id = character.Id }, character);
        }
        
        [HttpPut("{id:int}")]
        public async Task<ActionResult<Character>> UpdateCharacter(int id, [FromBody] Character updatedCharacter)
        {
            var existing = await context.Characters.FindAsync(id);
            if (existing == null)
                return NotFound($"Character with id {id} not found.");

            // Update fields
            existing.Name = updatedCharacter.Name;
            existing.Age = updatedCharacter.Age;
            existing.IsLiving = updatedCharacter.IsLiving;
            existing.ImageUrl = updatedCharacter.ImageUrl;

            // Save to database
            await context.SaveChangesAsync();

            // Return the updated object (so frontend can refresh immediately)
            return Ok(existing);
        }
    }
}
