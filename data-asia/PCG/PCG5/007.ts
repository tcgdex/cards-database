import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Pinsir",
         ja: "ピンシル",
         fr: "Pinsir",
         de: "Pinsir",
         es: "Pusir",
         it: "Pinir",
         pt: "Pinsir",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [127],
      hp: 70,
      types: ["Grass"],
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
            en: "As long as Pinsir is the only PokÃ©mon you have in play, your opponent's Basic PokÃ©mon can't attack.",
            ja: "ピンシルがあなたがプレイしている唯一のポカモンである限り、あなたの相手の基本的なポカモンは攻撃できません。",
            fr: "Tant que Pinir est le seul poké que vous avez en jeu, le poké de base de votre adversaire ne peut pas attaquer.",
            de: "Solange Pinsir der einzige Pokémon ist, den Sie im Spiel haben, kann der grundlegende Poké -Mong Ihres Gegners nicht angreifen.",
            es: "Mientras Pinsir sea el único Poké Mon que tienes en juego, el Poké básico de tu oponente no puede atacar.",
            it: "Finché Pinsir è l'unico poké mon che hai in gioco, il poké di base del tuo avversario non può attaccare.",
            pt: "Enquanto Pinsir for o único Poké Mon que você tem em jogo, o Poké Mon do seu oponente não pode atacar.",
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
            en: "Search your deck for a Grass Pokemon (excluding Pokemon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索して、草のポケモン（ポケモンエクスを除く）を検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre pont pour un Pokémon d'herbe (à l'exclusion de Pokemon-Ex), montrez-le à votre adversaire et mettez-le dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem Graspokemon (ohne Pokemon-ex), zeigen Sie es Ihrem Gegner und geben Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon de hierba (excluyendo Pokémon-EX), muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un Pokemon di erba (escluso Pokemon-Ex), mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por um Pokémon de grama (excluindo Pokemon-Ex), mostre-o ao seu oponente e coloque-o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Overhead Toss",
            ja: "オーバーヘッドトス",
            fr: "Tirage au sort",
            de: "Overhead Wurf",
            es: "Revoltijo",
            it: "Lancio sopra la testa",
            pt: "Arremesso aéreo",
          },
          effect: {
            en: "Does 20 damage to 1 of your Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "ベンチ付きポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 20 dommages à 1 de votre pokemon bancé. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 20 an 1 Ihrer Bankpokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 20 daños a 1 de su Pokémon de banca. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 20 danni a 1 del tuo Pokemon in panchina. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Causa 20 danos a 1 do seu Pokémon em banco. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
