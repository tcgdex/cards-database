import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Ninetales (Delta Species)",
         ja: "ニネタール（デルタ種）",
         fr: "Ninetales (espèces delta)",
         de: "Ninetales (Delta -Arten)",
         es: "Ninetales (especie delta)",
         it: "Ninetales (specie delta)",
         pt: "Ninetales (espécies delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [38],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Volunteer",
            ja: "ボランティア",
            fr: "Bénévole",
            de: "Freiwilliger",
            es: "Voluntario",
            it: "Volontario",
            pt: "Voluntário",
          },
          effect: {
            en: "Once during your turn (before your attack), you may remove 4 damage counters from Ninetales and discard Ninetales from Vulpix. If you do, search your deck for Ninetales or Ninetales ex and put it onto Vulpix (this counts as evolving Vulpix).  Shuffle your deck afterward.",
            ja: "ターン中（攻撃前）に（攻撃の前）、ニネタールから4つのダメージカウンターを削除し、VulpixからNinetalesを破棄することができます。そうした場合は、デッキをNineTalesまたはNinetales Exを検索し、Vulpixに置いてください（これは進化するVulpixとしてカウントされます）。  その後、デッキをシャッフルします。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez supprimer 4 compteurs de dégâts de Ninetales et jeter Ninetales de Vulpix. Si vous le faites, recherchez votre deck pour Ninetales ou Ninetales EX et mettez-le sur Vulpix (cela compte comme en évolution Vulpix).  Mélanger votre deck par la suite.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie 4 Schadenszähler aus Ninetales entfernen und Ninetales von Vulpix abwerfen. Wenn Sie dies tun, suchen Sie Ihr Deck nach Ninetales oder Ninetales Ex und setzen Sie es auf Vulpix (dies zählt als sich entwickelnde Vulpix).  Mischen Sie anschließend Ihr Deck.",
            es: "Una vez durante su turno (antes de su ataque), puede eliminar 4 contadores de daño de Ninetales y descartar a Ninetales de Vulpix. Si lo hace, busque en su mazo Ninetales o Ninetales EX y póngalo en Vulpix (esto cuenta como Vulpix en evolución).  Baraja tu mazo después.",
            it: "Una volta durante il tuo turno (prima dell'attacco), è possibile rimuovere 4 contatori di danno da Ninetales e scartare le ninetali da Vulpix. Se lo fai, cerca nel tuo mazzo Ninetales o Ninetales ex e mettilo su Vulpix (questo conta come vulpix in evoluzione).  Shuffle il tuo mazzo in seguito.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode remover 4 contadores de danos de Ninetales e descartar ninetales da Vulpix. Se o fizer, procure seu baralho para Ninetales ou Ninetales ex e coloque -o no Vulpix (isso conta como vulpix em evolução).  Afaste seu baralho depois.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Trick Tail",
            ja: "トリックテール",
            fr: "Queue de trick",
            de: "Trick -Schwanz",
            es: "Cola de truco",
            it: "Trick Tail",
            pt: "TRAGE TAIL",
          },
          effect: {
            en: "Search your discard pile for an Energy card and attach it to 1 of your Pokemon.",
            ja: "廃棄の山を検索して、エネルギーカードを1枚取り付けます。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie et attachez-la à 1 de votre Pokémon.",
            de: "Suchen Sie Ihren Ablagerungsstapel nach einer Energiekarte und befestigen Sie sie an 1 Ihres Pokémon.",
            es: "Busque en su pila de descarte en busca de una tarjeta de energía y colóquela a 1 de su Pokémon.",
            it: "Cerca il tuo mucchio di scarti per una carta energetica e attaccalo a 1 del tuo Pokemon.",
            pt: "Pesquise sua pilha de descarte por um cartão de energia e anexe -o a 1 do seu Pokémon.",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
