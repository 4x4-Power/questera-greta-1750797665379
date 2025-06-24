export const MODULOS = [
  {
    id: 'ninos',
    nombre: 'Niños Master',
    color: 'ninos',
    descripcion: 'Enseñanza especializada para niños de 3 a 8 años',
    imagen: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    icono: '🧒'
  },
  {
    id: 'preadolescentes',
    nombre: 'Preadolescentes Master',
    color: 'preadolescentes',
    descripcion: 'Contenido diseñado para preadolescentes de 9 a 12 años',
    imagen: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800',
    icono: '👦'
  },
  {
    id: 'adolescentes',
    nombre: 'Adolescentes Master',
    color: 'adolescentes',
    descripcion: 'Recursos para ministrar a adolescentes de 13 a 17 años',
    imagen: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    icono: '👨‍🎓'
  },
  {
    id: 'jovenes',
    nombre: 'Jóvenes Master',
    color: 'jovenes',
    descripción: 'Herramientas para el ministerio juvenil de 18 a 30 años',
    imagen: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
    icono: '👥'
  },
  {
    id: 'evangelismo',
    nombre: 'Evangelismo Master',
    color: 'evangelismo',
    descripcion: 'Estrategias efectivas de evangelización',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    icono: '📖'
  },
  {
    id: 'paternidad',
    nombre: 'Paternidad Master',
    color: 'paternidad',
    descripcion: 'Principios bíblicos para la crianza',
    imagen: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=800',
    icono: '👨‍👩‍👧‍👦'
  },
  {
    id: 'pastoral',
    nombre: 'Pastoral Master',
    color: 'pastoral',
    descripcion: 'Liderazgo y cuidado pastoral efectivo',
    imagen: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    icono: '⛪'
  }
]

export const CURSOS_POR_MODULO = {
  ninos: [
    {
      id: 'n1',
      titulo: 'Fundamentos de la Fe para Niños',
      categoria: 'Niños',
      descripcion: 'Enseñanzas básicas de la fe cristiana adaptadas para niños pequeños',
      imagen: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400',
      duracion: '45 min',
      rating: 4.9,
      lecciones: 8
    },
    {
      id: 'n2',
      titulo: 'Historias Bíblicas Interactivas',
      categoria: 'Niños',
      descripcion: 'Relatos bíblicos con actividades y dinámicas para captar la atención',
      imagen: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400',
      duracion: '30 min',
      rating: 4.8,
      lecciones: 12
    },
    {
      id: 'n3',
      titulo: 'Valores Cristianos para Pequeños',
      categoria: 'Niños',
      descripcion: 'Enseñanza de valores fundamentales a través de juegos y canciones',
      imagen: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400',
      duracion: '25 min',
      rating: 4.7,
      lecciones: 10
    }
  ],
  preadolescentes: [
    {
      id: 'p1',
      titulo: 'Identidad en Cristo',
      categoria: 'Preadolescentes',
      descripcion: 'Ayudando a los preadolescentes a descubrir su identidad en Cristo',
      imagen: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400',
      duracion: '50 min',
      rating: 4.8,
      lecciones: 6
    },
    {
      id: 'p2',
      titulo: 'Amistad y Relaciones Sanas',
      categoria: 'Preadolescentes',
      descripcion: 'Principios cristianos para construir amistades saludables',
      imagen: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400',
      duracion: '40 min',
      rating: 4.9,
      lecciones: 8
    }
  ],
  adolescentes: [
    {
      id: 'a1',
      titulo: 'Liderazgo Juvenil',
      categoria: 'Adolescentes',
      descripcion: 'Desarrollando líderes cristianos entre los adolescentes',
      imagen: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      duracion: '60 min',
      rating: 4.9,
      lecciones: 10
    },
    {
      id: 'a2',
      titulo: 'Pureza y Santidad',
      categoria: 'Adolescentes',
      descripcion: 'Enseñanzas sobre pureza sexual y santidad para adolescentes',
      imagen: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400',
      duracion: '55 min',
      rating: 4.7,
      lecciones: 7
    }
  ],
  jovenes: [
    {
      id: 'j1',
      titulo: 'Propósito y Llamado',
      categoria: 'Jóvenes',
      descripcion: 'Descubriendo el propósito divino para la vida de los jóvenes',
      imagen: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400',
      duracion: '65 min',
      rating: 4.8,
      lecciones: 8
    },
    {
      id: 'j2',
      titulo: 'Matrimonio y Noviazgo Cristiano',
      categoria: 'Jóvenes',
      descripcion: 'Principios bíblicos para las relaciones de pareja',
      imagen: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400',
      duracion: '70 min',
      rating: 4.9,
      lecciones: 9
    }
  ],
  evangelismo: [
    {
      id: 'e1',
      titulo: 'Evangelismo Personal Efectivo',
      categoria: 'Evangelismo',
      descripcion: 'Técnicas y estrategias para compartir el evangelio de manera personal',
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      duracion: '75 min',
      rating: 4.9,
      lecciones: 12
    },
    {
      id: 'e2',
      titulo: 'Evangelismo Digital',
      categoria: 'Evangelismo',
      descripcion: 'Usando las redes sociales y tecnología para evangelizar',
      imagen: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
      duracion: '60 min',
      rating: 4.6,
      lecciones: 8
    }
  ],
  paternidad: [
    {
      id: 'pa1',
      titulo: 'Disciplina con Amor',
      categoria: 'Paternidad',
      descripcion: 'Métodos bíblicos para disciplinar a los hijos con amor',
      imagen: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=400',
      duracion: '55 min',
      rating: 4.8,
      lecciones: 7
    },
    {
      id: 'pa2',
      titulo: 'Valores Familiares Cristianos',
      categoria: 'Paternidad',
      descripcion: 'Estableciendo valores cristianos sólidos en el hogar',
      imagen: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400',
      duracion: '50 min',
      rating: 4.7,
      lecciones: 6
    }
  ],
  pastoral: [
    {
      id: 'ps1',
      titulo: 'Liderazgo Pastoral',
      categoria: 'Pastoral',
      descripcion: 'Principios fundamentales del liderazgo cristiano pastoral',
      imagen: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400',
      duracion: '80 min',
      rating: 4.9,
      lecciones: 10
    },
    {
      id: 'ps2',
      titulo: 'Consejería Pastoral',
      categoria: 'Pastoral',
      descripcion: 'Herramientas para brindar consejería efectiva desde la perspectiva bíblica',
      imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      duracion: '70 min',
      rating: 4.8,
      lecciones: 8
    }
  ]
}

export const TESTIMONIOS = [
  {
    id: 1,
    nombre: 'Pastor Miguel Rodríguez',
    iglesia: 'Iglesia Vida Abundante',
    mensaje: 'Los cursos del Club de Maestros 4x4 han transformado completamente nuestra escuela dominical. Los niños están más comprometidos que nunca.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    rating: 5
  },
  {
    id: 2,
    nombre: 'Maestra Ana López',
    iglesia: 'Centro Cristiano Emanuel',
    mensaje: 'Las herramientas prácticas y la calidad del contenido son excepcionales. Mis estudiantes han crecido espiritualmente de manera notable.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    rating: 5
  },
  {
    id: 3,
    nombre: 'Líder Juan Carlos Méndez',
    iglesia: 'Iglesia Roca de Salvación',
    mensaje: 'El módulo de liderazgo juvenil nos ha ayudado a formar una nueva generación de líderes comprometidos con Cristo.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5
  },
  {
    id: 4,
    nombre: 'Pastora María González',
    iglesia: 'Iglesia Nuevo Amanecer',
    mensaje: 'Como madre y pastora, los cursos de paternidad han sido una bendición para mi familia y mi ministerio.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5
  }
]

export const VIDEOS_BIENVENIDA = [
  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300',
  'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
  'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=300',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300',
  'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300'
]