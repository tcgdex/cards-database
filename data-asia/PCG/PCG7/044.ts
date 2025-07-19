import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Pichu (Delta Species)",
         ja: "ピチュ（デルタ種）",
         fr: "Pichu (espèces delta)",
         de: "Pichu (Delta -Arten)",
         es: "Pichu (especie delta)",
         it: "Pichu (Delta Species)",
         pt: "Pichu (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [172],
      hp: 50,
      types: ["Metal"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Baby Evolution",
            ja: "赤ちゃんの進化",
            fr: "Évolution de bébé",
            de: "Babyentwicklung",
            es: "Evolución del bebé",
            it: "Evoluzione del bambino",
            pt: "Evolução do bebê",
          },
          effect: {
            en: "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
            ja: "ターン中（攻撃の前に）一度、ピカチュウをピチュに手から置いて（これは進化するピチュとしてカウントされます）、ピチュからすべてのダメージカウンターを削除することができます。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Pikachu de votre main sur Pichu (cela compte comme Pichu en évolution) et retirer tous les compteurs de dégâts de Pichu.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) Pikachu aus Ihrer Hand auf Pichu stellen können (dies zählt als sich entwickelnde Pichu) und alle Schadenszähler von Pichu entfernen.",
            es: "Una vez durante su turno (antes de su ataque), puede colocar a Pikachu de su mano en Pichu (esto cuenta como Pichu en evolución) y eliminar todos los contadores de daño de Pichu.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi mettere Pikachu dalla mano a Pichu (questo conta come Pichu in evoluzione) e rimuovere tutti i contatori di danno da Pichu.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode colocar Pikachu da sua mão no Pichu (isso conta como evoluindo o Pichu) e remover todos os contadores de danos de Pichu.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Paste",
            ja: "ペースト",
            fr: "Coller",
            de: "Paste",
            es: "Pasta",
            it: "Impasto",
            pt: "Colar",
          },
          effect: {
            en: "Search your discard pile for an Energy card and attach it to 1 of your Pokemon that has Delta on its card.",
            ja: "廃棄の山を検索して、エネルギーカードを使用して、デルタがあるポケモン1枚に添付します。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie et attachez-la à 1 de votre Pokémon qui a delta sur sa carte.",
            de: "Suchen Sie Ihren Abwurfstapel nach einer Energiekarte und befestigen Sie sie an 1 Ihres Pokémon, das Delta auf seiner Karte hat.",
            es: "Busque en su pila de descarte en busca de una tarjeta de energía y adjunte a 1 de su Pokémon que tiene Delta en su tarjeta.",
            it: "Cerca il tuo mucchio di scarti per una carta energetica e attaccalo a 1 del tuo Pokemon che ha Delta sulla sua carta.",
            pt: "Pesquise sua pilha de descarte por um cartão de energia e anexe -o a 1 do seu Pokémon que possui o Delta em seu cartão.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
