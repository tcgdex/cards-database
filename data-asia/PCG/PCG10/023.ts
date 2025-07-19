import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Pikachu",
         ja: "ピカチュウ",
         fr: "Pikachu",
         de: "Pikachu",
         es: "Pikachu",
         it: "Pikachu",
         pt: "Pikachu",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [25],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
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
            en: "Search your discard pile for a Lightning Energy card and attach it to Pikachu.",
            ja: "廃棄物のエネルギーカードを廃棄することを検索し、ピカチュウに添付してください。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie Lightning et attachez-la à Pikachu.",
            de: "Suchen Sie Ihren Ablagerungsstapel nach einer Blitzergiekarte und befestigen Sie sie an Pikachu.",
            es: "Busque en su pila de descarte una tarjeta de energía Lightning y adjunte a Pikachu.",
            it: "Cerca al tuo mucchio di scarti un fulmine e attaccalo a Pikachu.",
            pt: "Pesquise sua pilha de descarte para obter um cartão de energia Lightning e anexe -o a Pikachu.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Slam",
            ja: "スラム",
            fr: "Claquer",
            de: "Zuschlagen",
            es: "Golpe",
            it: "Sbattere",
            pt: "Slam",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
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
