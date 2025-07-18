import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Farfetch'd",
         ja: "Farfetch'd",
         fr: "Farfetch'd",
         de: "Farfetch'd",
         es: "Farfetch'd",
         it: "Farfetch'd",
         pt: "Farfetch'd",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [83],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Hoard",
            ja: "買いだめ",
            fr: "Magot",
            de: "Horten",
            es: "Acumular",
            it: "Hoarard",
            pt: "Tesouro",
          },
          effect: {
            en: "Search your deck for up to 2 Pokemon Tool cards and attach them to any of your Pokemon (excluding Pokemon that already have a Pokemon Tool attached to them). Shuffle your deck afterward.",
            ja: "デッキを最大2枚のポケモンツールカードで検索し、ポケモンのいずれかに添付します（ポケモンツールが既に取り付けられているポケモンを除く）。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck jusqu'à 2 cartes à outils Pokémon et attachez-les à l'un de vos Pokémon (à l'exclusion des Pokémon qui ont déjà un outil Pokémon qui leur est attaché). Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 Pokemon -Werkzeugkarten und fügen Sie sie an einem Ihrer Pokemon an (ohne Pokemon, das bereits ein Pokemon -Tool enthält). Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 2 tarjetas de herramientas de Pokémon y adjunta a cualquiera de sus Pokémon (excluyendo Pokémon que ya tiene una herramienta de Pokémon conectada a ellas). Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo per un massimo di 2 schede di strumenti Pokemon e allegale a uno qualsiasi dei tuoi Pokemon (esclusi Pokemon che ha già uno strumento Pokemon collegato a loro). Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por até 2 cartas de ferramentas Pokemon e anexe -as a qualquer um dos seus Pokémon (excluindo Pokemon que já possui uma ferramenta Pokemon anexada a eles). Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Cross-Cut",
            ja: "クロスカット",
            fr: "Croix",
            de: "Cross-Cut",
            es: "Cortado transversal",
            it: "Croce",
            pt: "Corte transversal",
          },
          effect: {
            en: "If the Defending Pokemon is an Evolved Pokemon, this attack does 10 damage plus 20 more damage.",
            ja: "防御ポケモンが進化したポケモンである場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
            fr: "Si le Pokémon en défense est un Pokémon évolué, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon ein entwickeltes Pokémon ist, verursacht dieser Angriff 10 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor es un Pokémon evolucionado, este ataque hace 10 daños más 20 más de daño.",
            it: "Se il Pokemon in carica è un Pokemon evoluto, questo attacco fa 10 danni più 20 danni.",
            pt: "Se o Pokémon atual for um Pokémon evoluído, esse ataque causará 10 danos mais 20 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
