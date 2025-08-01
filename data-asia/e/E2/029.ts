import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Quagsire",
         ja: "quagsire",
         fr: "Bourbier",
         de: "Quagsire",
         es: "Aturdir",
         it: "Quagsire",
         pt: "Quagsire",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [195],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Water Gun",
            ja: "ウォーターガン",
            fr: "Pistolet à eau",
            de: "Wasserpistole",
            es: "Pistola de agua",
            it: "Pistola ad acqua",
            pt: "Pistola de água",
          },
          effect: {
            en: "This attack does 20 damage plus 10 more damage for each Water Energy attached to Quagsire but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "この攻撃は、Quagsireに取り付けられた水エネルギーごとに20のダメージに加えて10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Cette attaque fait 20 dégâts plus 10 dégâts supplémentaires pour chaque énergie d'eau attachée au Quagsire mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Dieser Angriff verursacht 20 Schäden plus 10 weitere Schäden für jede an Quagsire angeschlossene Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Este ataque hace 20 daños más 10 daños más por cada energía de agua unida a Quagsire, pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Questo attacco infligge 20 danni più 10 danni per ogni energia idrica attaccata al quagsire ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "Este ataque causa 20 de dano mais 10 mais danos para cada energia da água ligada ao Quagsire, mas não é usada para pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
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
            en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の50回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 50 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 50 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 50 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 50 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 50 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
