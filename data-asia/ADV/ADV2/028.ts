import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Gardevoir ex",
         ja: "Gardevoir Ex",
         fr: "GardEVoir ex",
         de: "GARTEVOIR EX",
         es: "Gardevoir ex",
         it: "Gardevoir Ex",
         pt: "Gardevoir Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [282],
      hp: 150,
      types: ["Psychic"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Feedback",
            ja: "フィードバック",
            fr: "Retour",
            de: "Rückmeldung",
            es: "Comentario",
            it: "Feedback",
            pt: "Opinião",
          },
          effect: {
            en: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokemon.",
            ja: "相手の手にカードの数を数えます。その多くのダメージカウンターを防御ポケモンに置きます。",
            fr: "Comptez le nombre de cartes dans la main de votre adversaire. Mettez autant de compteurs de dégâts sur le Pokémon en défense.",
            de: "Zählen Sie die Anzahl der Karten in der Hand Ihres Gegners. Setzen Sie so viele Schadenszähler auf das verteidigende Pokémon.",
            es: "Cuente el número de cartas en la mano de tu oponente. Ponga tantos contadores de daño en el Pokémon defensor.",
            it: "Conta il numero di carte nella mano del tuo avversario. Metti molti contatori di danno sul Pokemon in carica.",
            pt: "Conte o número de cartas na mão do seu oponente. Coloque tantos contadores de danos no Pokémon atual.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Psystorm",
            ja: "PSYSTORM",
            fr: "Tempête",
            de: "PStorm",
            es: "Psíquica",
            it: "Psystorm",
            pt: "Psystorm",
          },
          effect: {
            en: "Does 10 damage times the total amount of Energy attached to all Pokemon in play.",
            ja: "プレイ中のすべてのポケモンに取り付けられたエネルギーの総量を10回ダメージします。",
            fr: "Fait 10 dégâts de temps la quantité totale d'énergie attachée à tous les pokemon en jeu.",
            de: "Hat 10 Schadenszeiten die Gesamtmenge an Energie, die an allen Pokémon im Spiel angebracht ist.",
            es: "Hace 10 tiempos de daño la cantidad total de energía unida a todos los Pokémon en juego.",
            it: "Fa 10 danni volte la quantità totale di energia collegata a tutti i Pokemon in gioco.",
            pt: "10 danos vezes a quantidade total de energia ligada a todos os Pokémon em jogo.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
