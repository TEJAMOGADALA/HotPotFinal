using HotPot.Interfaces;
using HotPot.Models.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotPot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Angular")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminServices _services;

        public AdminController(IAdminServices services)
        {
            _services = services;
        }

        [Route("Login")]
        [HttpPost]
        public async Task<IActionResult> Login(LoginUserDTO loginUser)
        {
            try
            {
                loginUser = await _services.LoginAdmin(loginUser);
                return Ok(loginUser);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Register")]
        [HttpPost]
        public async Task<IActionResult> Register(LoginUserDTO regAdmin)
        {
            try
            {
                regAdmin = await _services.RegisterAdmin(regAdmin);
                return Ok(regAdmin);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
