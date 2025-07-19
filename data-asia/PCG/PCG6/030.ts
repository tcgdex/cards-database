import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Vaporeon (Delta Species)",
         ja: "Vaporeon（デルタ種）",
         fr: "Vaporeon (espèces delta)",
         de: "Vaporeon (Delta -Arten)",
         es: "Vaporeon (especie delta)",
         it: "Vaporeon (Delta Species)",
         pt: "Vaporeon (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [134],
      hp: 70,
      types: ["Water"],
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
            en: "Search your deck for a Holon Energy card and attach it to Vaporeon. Shuffle your deck afterward.",
            ja: "デッキを検索して、ホロンエネルギーカードを添付し、Vaporeonに添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte Holon Energy et attachez-la à Vaporeon. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Holon -Energiekarte und fügen Sie sie an Vaporeon an. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía Holon y colóquela a Vaporeon. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta di energia holon e attaccalo a vaporeon. Shuffle il tuo mazzo in seguito.",
            pt: "Procure seu baralho em busca de um cartão de energia Holon e anexe -o ao Vaporeon. Afaste seu baralho depois.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Metal", "Colorless"],
          name: {
            en: "Return Wave",
            ja: "戻り波",
            fr: "Vague de retour",
            de: "Rückwelle",
            es: "Ola de retorno",
            it: "Onda di ritorno",
            pt: "Onda de retorno",
          },
          effect: {
            en: "You may return an Energy card attached to Vaporeon to your hand. If you do, choose an Energy card attached to the Defending Pokemon and return it to your opponent's hand.",
            ja: "Vaporeonに取り付けられたエネルギーカードを手に返すことができます。そうする場合は、防御ポケモンに取り付けられたエネルギーカードを選択し、相手の手に返します。",
            fr: "Vous pouvez retourner une carte d'énergie attachée à Vaporeon à votre main. Si vous le faites, choisissez une carte d'énergie attachée au Pokémon en défense et retournez-la à la main de votre adversaire.",
            de: "Sie können eine Energiekarte an Vaporeon an Ihre Hand zurückgeben. Wenn Sie dies tun, wählen Sie eine an das verteidigende Pokemon angeschlossene Energiekarte und geben Sie sie an die Hand Ihres Gegners zurück.",
            es: "Puede devolver una tarjeta de energía unida a Vaporeon a su mano. Si lo hace, elija una tarjeta de energía adjunta al Pokémon defensor y devuélvala a la mano de tu oponente.",
            it: "Puoi restituire una carta energetica collegata a vaporeon alla tua mano. Se lo fai, scegli una carta energetica collegata al Pokemon in difesa e restituila alla mano del tuo avversario.",
            pt: "Você pode devolver um cartão de energia conectado ao Vaporeon à sua mão. Se o fizer, escolha um cartão de energia anexado ao Pokémon atual e devolva -o à mão do seu oponente.",
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
