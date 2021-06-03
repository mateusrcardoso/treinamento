using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProdutoController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<ProdutoController> _logger;
        private IEnumerable<Produto> _produto = Enumerable.Range(1, 5).Select(index => new Produto
            {
                id = index,
                nome = "Produto " + index.ToString(),
                descricao = "Descrição do Produto " + index.ToString(),
                valor = 100 + index
            })
            .ToArray();

        public ProdutoController(ILogger<ProdutoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Produto> Get()
        {
            return _produto;
        }

        [HttpPost]
        public Produto Post(Produto produto)
        {            
            return produto;
        }
    }
}
