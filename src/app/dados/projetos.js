const projetos = [
    {
      id: "modal1",
      titulo: "Site Operante: Lucas Santos Personal",
      descricao: "Aplicação de Consultoria Fitness",
      imagem: "/fotoprojetols.png",
      ariaLabel: "Lucas Santos",
      conteudo:
        "Landing Page desenvolvida após pedido do personal trainer Lucas Santos...",
      features: [
        "Divulgação de consultoria",
        "Links de opções para contato",
        "Multiplataforma",
        "Hospedagem Alterada para melhor qualidade de vida do projeto",
      ],
      link: "https://lucassantospersonal.com",
    },
    {
      id: "modal2",
      titulo: "Projeto: E-Commerce",
      descricao:
        "Aplicação criada academicamente em equipe para disciplina de Práticas Profissionais no IFCE.",
      imagem: "/fotoprojetoempyrean.png",
      ariaLabel: "Empyrean Supplements",
      conteudo:
        "Focada no setor fitness, esse que está cada vez mais abrangente...",
      features: [
        "Acesso a produtos do meio fitness registrados no banco de dados do Firebase",
        "Preview em tempo real",
        "Multiplataforma",
        "OAuth Login",
      ],
      link: "https://empyreansupplements.web.app",
    },
    {
      id: "modal3",
      titulo: "Projeto: Lista To Do",
      descricao:
        "Projeto iniciante a fim de praticar conhecimentos de Back e Front-end.",
      imagem: "/fotoprojetolistatodo.png",
      ariaLabel: "Lista de Tarefas",
      conteudo:
        "Aplicação criada para praticar conceitos de JavaScript e Bootstrap.",
      features: [
        "Sistema de registro de tarefas",
        "Preview em tempo real",
        "Multiplataforma",
      ],
      link: "https://cadumaia.github.io/projetolistatodo",
    },
  ];
  
  export default projetos;



  {/* const Projetos = () => {
    const [openModal, setOpenModal] = useState(null);
  
    return (
      <div>
        {projetos.map((projeto) => (
          <CardProjeto
            key={projeto.id}
            projeto={projeto}
            setOpenModal={setOpenModal}
          />
        ))}
  
        {projetos.map(
          (projeto =>
            openModal === project.id && (
              <ProjectModal
                key={project.id}
                projeto={projeto}
                closeModal={() => setOpenModal(null)}
              />
            )
        )}
      </div>
    );
  };*/}