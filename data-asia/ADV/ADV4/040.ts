import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Voltorb",
         ja: "Voltorb",
         fr: "Voltorbe",
         de: "Voltorb",
         es: "Voltorbo",
         it: "Voltorb",
         pt: "Voltorb",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [100],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Recharge",
            ja: "充電",
            fr: "Recharger",
            de: "Aufladen",
            es: "Recargar",
            it: "Ricaricare",
            pt: "Recarregar",
          },
          effect: {
            en: "Search your deck for a Lightning Energy card and attach it to Voltorb. Shuffle your deck afterward.",
            ja: "デッキを検索して、Lightning Energy Cardを使用して、Voltorbに取り付けます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu une carte d'énergie Lightning et fixez-la à Voltorb. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Lightning Energy -Karte und befestigen Sie sie an Voltorb. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía Lightning y colóquela a Voltorb. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una scheda energetica Lightning e collegala a Voltorb. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho para obter um cartão de energia Lightning e anexe -o ao Voltorb. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Rolling Attack",
            ja: "ローリング攻撃",
            fr: "Attaque roulante",
            de: "Rolling -Angriff",
            es: "Ataque rodante",
            it: "Attacco rotolante",
            pt: "Ataque de rolamento",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
