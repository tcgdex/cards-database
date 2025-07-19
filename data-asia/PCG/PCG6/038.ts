import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Jolteon (Delta Species)",
         ja: "ジョルテオン（デルタ種）",
         fr: "Jolteon (espèces delta)",
         de: "Jolteon (Delta -Arten)",
         es: "Jolteon (especie delta)",
         it: "Jolteon (Delta Species)",
         pt: "Jolteon (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [135],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Delta Search",
            ja: "デルタ検索",
            fr: "Recherche delta",
            de: "Delta -Suche",
            es: "Búsqueda delta",
            it: "Ricerca delta",
            pt: "Pesquisa Delta",
          },
          effect: {
            en: "Search your deck for a Holon Energy card and attach it to Jolteon. Shuffle your deck afterward.",
            ja: "デッキを検索してホロンエネルギーカードを調べ、ジョルテオンに添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte Holon Energy et attachez-la à Jolteon. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Holon -Energiekarte und befestigen Sie sie an Jolteon. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía Holon y adjuntarla a Jolteon. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta di energia holon e attaccalo a Jolteon. Shuffle il tuo mazzo in seguito.",
            pt: "Procure seu baralho em busca de um cartão de energia Holon e anexe -o a Jolteon. Afaste seu baralho depois.",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Metal", "Colorless"],
          name: {
            en: "Return Spark",
            ja: "スパークを返します",
            fr: "Spark de retour",
            de: "Rücklauf",
            es: "Devolución de chispa",
            it: "Restituire scintilla",
            pt: "Retornar Spark",
          },
          effect: {
            en: "You may return an Energy card attached to Jolteon to your hand. If you do, this attack does 20 damage to 1 of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "Jolteonに取り付けられたエネルギーカードを手に返すことができます。もしそうなら、この攻撃は、相手のベンチ付きポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Vous pouvez retourner une carte d'énergie attachée à Jolteon à votre main. Si vous le faites, cette attaque fait 20 dégâts à 1 des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Sie können eine Energiekarte an Jolteon an Ihre Hand zurückgeben. Wenn Sie dies tun, schädigt dieser Angriff 20 Schäden an 1 des Pokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Puede devolver una tarjeta de energía unida a Jolteon a su mano. Si lo haces, este ataque hace 20 daños a 1 de los Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Puoi restituire una carta energetica collegata a Jolteon alla tua mano. Se lo fai, questo attacco fa 20 danni a 1 del Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Você pode devolver um cartão de energia anexado a Jolteon à sua mão. Se o fizer, esse ataque causa 20 de dano a 1 dos Pokémon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 1,

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
