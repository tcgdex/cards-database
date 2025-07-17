import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Mareep",
         ja: "Mareep",
         fr: "Marin",
         de: "Mareep",
         es: "Marino",
         it: "Mareep",
         pt: "Marep",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [179],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Charge",
            ja: "充電",
            fr: "Charge",
            de: "Aufladung",
            es: "Cargar",
            it: "Carica",
            pt: "Cobrar",
          },
          effect: {
            en: "Attach 1 Lightning Energy card from your discard pile to Mareep.",
            ja: "廃棄パイルからMareepに1つの稲妻エネルギーカードを取り付けます。",
            fr: "Fixez 1 carte d'énergie Lightning de votre tas de défausse à Mareep.",
            de: "Befestigen Sie 1 Lightning Energy Card von Ihrem Ablagerungsstapel an Mareep.",
            es: "Adjunte 1 tarjeta de energía del rayo de su pila de descarte a Mareep.",
            it: "Attacca 1 fulmine di energia dalla tua pila di scarto a Mareep.",
            pt: "Anexe 1 cartão de energia raios da sua pilha de descarte a Mareep.",
          },
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Tail Slap",
            ja: "テールスラップ",
            fr: "Gifle",
            de: "Schwanzschlag",
            es: "Bofetada",
            it: "Slap di coda",
            pt: "Tail Slap",
          },
          damage: 20,
        },
      ],

      retreat: 1,

};
