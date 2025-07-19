import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Flareon (Delta Species)",
         ja: "フレレオン（デルタ種）",
         fr: "Flareon (espèces delta)",
         de: "Flareon (Delta -Arten)",
         es: "Flareón (especie delta)",
         it: "Flareon (Delta Species)",
         pt: "Flareon (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [136],
      hp: 70,
      types: ["Fire"],
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
            en: "Search your deck for a Holon Energy card and attach it to Flareon. Shuffle your deck afterward.",
            ja: "デッキを検索してホロンエネルギーカードを調べ、フレアロンに添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte Holon Energy et attachez-la à Flareon. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Holon -Energiekarte und befestigen Sie sie an Flareon. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía Holon y colóquela a Flareon. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta di energia holon e attaccalo a Flareon. Shuffle il tuo mazzo in seguito.",
            pt: "Procure seu baralho em busca de um cartão de energia Holon e prenda -o a Flareon. Afaste seu baralho depois.",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Metal", "Colorless"],
          name: {
            en: "Return Burn",
            ja: "火傷を返します",
            fr: "Retourner brûler",
            de: "Rückbrennung",
            es: "Quemadura de regreso",
            it: "Restituisci Burn",
            pt: "Retornar queima",
          },
          effect: {
            en: "You may return an Energy card attached to Flareon to your hand. If you do, the Defending Pokemon is now Burned.",
            ja: "フレアロンに取り付けられたエネルギーカードを手に返すことができます。もしそうなら、防御するポケモンは燃やされます。",
            fr: "Vous pouvez retourner une carte d'énergie attachée à Flareon à votre main. Si vous le faites, le Pokémon en défense est maintenant brûlé.",
            de: "Sie können eine Energiekarte an Flareon an Ihre Hand zurückgeben. Wenn Sie dies tun, ist das verteidigende Pokemon jetzt verbrannt.",
            es: "Puede devolver una tarjeta de energía unida a Flareon a su mano. Si lo haces, el Pokémon defensor ahora se quema.",
            it: "Puoi restituire una carta energetica collegata a Flareon alla tua mano. Se lo fai, il Pokemon in carica viene ora bruciato.",
            pt: "Você pode devolver um cartão de energia conectado ao Flareon à sua mão. Se o fizer, o pokemon defensor agora está queimado.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
