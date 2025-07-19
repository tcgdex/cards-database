import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Skarmory",
         ja: "スカルモリー",
         fr: "Skarmory",
         de: "Skarmory",
         es: "Skarmory",
         it: "Skarmory",
         pt: "Skarmory",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [227],
      hp: 70,
      types: ["Metal"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Shining Horn",
            ja: "輝くホーン",
            fr: "Corne brillante",
            de: "Leuchtendes Horn",
            es: "Bocina",
            it: "Corno splendente",
            pt: "Chifre brilhante",
          },
          effect: {
            en: "As long as Skarmory is the only PokÃ©mon you have in play, your opponent's Basic PokÃ©mon can't attack.",
            ja: "スカルモリーがあなたがプレイしている唯一のポカモンである限り、あなたの対戦相手の基本的なポカモンは攻撃できません。",
            fr: "Tant que Skarmory est le seul poké que vous avez en jeu, le poké de base de votre adversaire ne peut pas attaquer.",
            de: "Solange Skarmory der einzige Pokémon ist, den Sie im Spiel haben, kann der grundlegende Poké -Mong Ihres Gegners nicht angreifen.",
            es: "Mientras Skarmory sea el único Poké Mon que tienes en juego, el Poké básico de tu oponente no puede atacar.",
            it: "Finché Skarmory è l'unico poké mon che hai in gioco, il poké di base del tuo avversario non può attaccare.",
            pt: "Enquanto o Skarmory for o único Poké Mon que você tem em jogo, o Poké Mon do seu oponente não pode atacar.",
          },
      }],

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
            en: "Search your deck for a Metal Pokemon (excluding Pokemon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索して、金属のポケモン（ポケモンエクスを除く）を検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un pokemon métallique (à l'exclusion de Pokemon-Ex), montrez-le à votre adversaire et mettez-le dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem Metallpokemon (ohne Pokemon-ex), zeigen Sie es Ihrem Gegner und geben Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon de metal (excluyendo Pokemon-EX), muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un Pokemon di metallo (escluso Pokemon-Ex), mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por um Pokémon de metal (excluindo Pokemon-Ex), mostre-o ao seu oponente e coloque-o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Steel Wing",
            ja: "スチール翼",
            fr: "Aile en acier",
            de: "Stahlflügel",
            es: "Ala de acero",
            it: "Ala d'acciaio",
            pt: "Asa de aço",
          },
          effect: {
            en: "During your opponent's next turn, any damage done to Skarmory by attacks is reduced by 20 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中、攻撃によってスカルモリーに与えられた損害は20増加します（脱力感と抵抗を適用した後）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à Skarmory par des attaques est réduit de 20 (après avoir appliqué une faiblesse et une résistance).",
            de: "Während der nächsten Kurve Ihres Gegners wird jeder Schaden, den Skarmory durch Angriffe angerichtet hat, um 20 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a Skarmory por ataques se reduce en 20 (después de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno arrecato a Skarmory dagli attacchi viene ridotto di 20 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado ao Skarmory por ataques é reduzido em 20 (após aplicar fraqueza e resistência).",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
