import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Corsola",
         ja: "コルサラ",
         fr: "Corsola",
         de: "Korsola",
         es: "Corsola",
         it: "Corsola",
         pt: "Corsola",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [222],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Cry for Help",
            ja: "助けを求めて泣きます",
            fr: "Cry à l'aide",
            de: "Hilfe weinen",
            es: "Llorar por ayuda",
            it: "Piangere di aiuto",
            pt: "Chorar por ajuda",
          },
          effect: {
            en: "Search your deck for a Water or Fighting Pokemon (excluding Pokemon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索したり、ポケモンとの戦い（ポケモンエクスを除く）を検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre pont pour une eau ou en combattant Pokémon (à l'exclusion de Pokemon-Ex), montrez-le à votre adversaire et mettez-le dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem Wasser oder einem Kampfpokemon (ohne Pokemon-ex), zeigen Sie es Ihrem Gegner und geben Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon de agua o pelea (excluyendo Pokémon-EX), muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un pokemon di combattimento (escluso Pokemon-Ex), mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Procure seu baralho em busca de água ou lutando com Pokémon (excluindo Pokemon-Ex), mostre-o ao seu oponente e coloque-o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Water"],
          name: {
            en: "Double Attack",
            ja: "二重攻撃",
            fr: "Double attaque",
            de: "Doppelangriff",
            es: "Doble ataque",
            it: "Doppio attacco",
            pt: "Ataque duplo",
          },
          effect: {
            en: "Choose 2 of your opponent's Benched Pokemon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンの2つを選択します。この攻撃は、それぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 2 des pokemon bancés de votre adversaire. Cette attaque fait 10 dégâts à chacun d'eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 2 des Bankpokémon Ihres Gegners. Dieser Angriff schädigt jeweils 10 von ihnen. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 2 de los Pokémon de banca de tu oponente. Este ataque hace 10 daños a cada uno de ellos. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 2 del Pokemon in panchina del tuo avversario. Questo attacco fa 10 danni a ciascuno di essi. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 2 dos Pokémon com bancos do seu oponente. Este ataque causa 10 danos a cada um deles. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
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
