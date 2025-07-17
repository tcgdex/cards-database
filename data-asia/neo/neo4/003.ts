import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Sunkern",
         ja: "サンカーン",
         fr: "Enfermer",
         de: "Gesunken",
         es: "Hundido",
         it: "Sunker",
         pt: "SUNHERN",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [191],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Rollout",
            ja: "ロールアウトする",
            fr: "Dérouler",
            de: "Ausrollen",
            es: "Despliegue",
            it: "Lancio",
            pt: "Sair da cama",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Sunbathe",
            ja: "日光浴",
            fr: "Bobine",
            de: "Sonnenbad",
            es: "Tomar el sol",
            it: "Prendere il sole",
            pt: "Tomar sol",
          },
          effect: {
            en: "Flip a coin. If heads, remove all damage counters from Sunkern. Search your deck for a card that evolves from Sunkern and attach that card to Sunkern. This counts as evolving Sunkern. Shuffle your deck afterward.",
            ja: "コインをひっくり返します。ヘッドの場合、Sunkernからすべてのダメージカウンターを削除します。サンカーンから進化するカードをデッキに検索し、そのカードをサンカーンに添付してください。これは進化するサンカーンとしてカウントされます。その後、デッキをシャッフルします。",
            fr: "Retourner une pièce. Si les têtes, retirez tous les compteurs de dégâts de Sunkern. Recherchez votre deck une carte qui évolue depuis Sunk et attachez cette carte à Sunkern. Cela compte comme un soleil évolutif. Mélanger votre deck par la suite.",
            de: "Eine Münze drehen. Wenn Köpfe, entfernen Sie alle Schadenszähler von Sunkern. Suchen Sie Ihr Deck nach einer Karte, die sich von Sunkern entwickelt, und befestigen Sie diese Karte an Sunkern. Dies gilt als sich weiterentwickeln. Mischen Sie anschließend Ihr Deck.",
            es: "Voltea una moneda. Si se dirige, retire todos los contadores de daño del hundido. Busque en su mazo una carta que evolucione desde Sunkern y adjunte esa carta a Sunkern. Esto cuenta como evolucionando hundido. Baraja tu mazo después.",
            it: "Capovolgi una moneta. Se la testa, rimuovere tutti i contatori di danno da Sunker. Cerca nel tuo mazzo una carta che si evolve da Sunker e attacca quella carta a Sunker. Questo conta come Sunker in evoluzione. Shuffle il tuo mazzo in seguito.",
            pt: "Vire uma moeda. Se as cabeças, remova todos os contadores de danos do SunKern. Procure seu baralho por uma carta que evolui da SunKern e prenda essa carta à SunKern. Isso conta como evoluindo a Sunhoria. Afaste seu baralho depois.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
