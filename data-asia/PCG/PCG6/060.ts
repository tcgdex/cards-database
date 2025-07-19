import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Persian",
         ja: "ペルシャ語",
         fr: "persan",
         de: "persisch",
         es: "persa",
         it: "persiano",
         pt: "persa",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [53],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Prowl",
            ja: "うろつき",
            fr: "Rôder",
            de: "Durchplagen",
            es: "Merodear",
            it: "Prowl",
            pt: "Prowl",
          },
          effect: {
            en: "Once during your turn, when you play Persian from your hand to evolve 1 of your PokÃ©mon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
            ja: "ターン中に、Perianを手から演奏してPokã©Monの1つを進化させると、デッキを1枚のカードで検索して手に入れることができます。その後、デッキをシャッフルします。",
            fr: "Une fois pendant votre tour, lorsque vous jouez du persan de votre main pour faire évoluer 1 de votre pokã © Mon, vous pouvez rechercher votre jeu pour une carte 1 et la mettre dans votre main. Mélanger votre deck par la suite.",
            de: "Sobald Sie während Ihres Zuges Persisch von Ihrer Hand spielen, um 1 Ihres Poké Mons zu entwickeln, können Sie Ihr Deck nach einer 1 -Karte durchsuchen und sie in Ihre Hand legen. Mischen Sie anschließend Ihr Deck.",
            es: "Una vez durante su turno, cuando juegas persa de tu mano para evolucionar 1 de tu Poké Mon, puedes buscar en tu mazo cualquier carta y ponerla en tu mano. Baraja tu mazo después.",
            it: "Una volta durante il tuo turno, quando giochi persiano dalla tua mano per evolvere 1 del tuo poké mon, puoi cercare nel tuo mazzo per qualsiasi carta 1 e metterlo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Uma vez durante o seu turno, quando você toca persa da sua mão para evoluir 1 do seu Poké Mon, você pode procurar seu baralho por 1 carta e colocá -la em sua mão. Afaste seu baralho depois.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Snap Tail",
            ja: "スナップテール",
            fr: "Snap-tail",
            de: "Schwanz schnappen",
            es: "Cola",
            it: "Coda a scatto",
            pt: "CAIXA SNAP",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 30 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 30 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 30 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
