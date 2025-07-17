import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Raticate",
         ja: "ラティテート",
         fr: "Ratiquer",
         de: "Ratatisch",
         es: "Raticato",
         it: "Raticata",
         pt: "Raticate",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [20],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Continuous Bite",
            ja: "連続した噛みつき",
            fr: "Morsure continue",
            de: "Kontinuierlicher Biss",
            es: "Mordida continua",
            it: "Bizio continuo",
            pt: "Mordida contínua",
          },
          effect: {
            en: "Flip 3 coins. If you get 1 heads, this attack does 10 damage plus 10 more damage. If you get 2 heads, this attack does 10 damage plus 30 more damage. If you get 3 heads, this attack does 10 damage plus 60 more damage.",
            ja: "3コインをフリップします。 1ヘッドを獲得した場合、この攻撃は10ダメージに加えて10ダメージを与えます。 2つのヘッドを獲得した場合、この攻撃は10ダメージに加えて30ダメージを与えます。 3ヘッドを獲得した場合、この攻撃は10ダメージに加えて60ダメージを与えます。",
            fr: "Flip 3 pièces. Si vous obtenez 1 têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires. Si vous obtenez 2 têtes, cette attaque fait 10 dégâts plus 30 dégâts supplémentaires. Si vous obtenez 3 têtes, cette attaque fait 10 dégâts plus 60 dégâts supplémentaires.",
            de: "3 Münzen umdrehen. Wenn Sie 1 Köpfe erhalten, verursacht dieser Angriff 10 Schaden zuzüglich 10 weiterer Schaden. Wenn Sie 2 Köpfe erhalten, verursacht dieser Angriff 10 Schaden zuzüglich 30 weitere Schäden. Wenn Sie 3 Köpfe erhalten, verursacht dieser Angriff 10 Schaden zuzüglich 60 weitere Schäden.",
            es: "Flip 3 monedas. Si obtienes 1 cabezas, este ataque hace 10 daños más 10 daños más. Si obtienes 2 cabezas, este ataque hace 10 daños más 30 más de daño. Si obtienes 3 cabezas, este ataque hace 10 daños más 60 más de daño.",
            it: "Flip 3 monete. Se ottieni 1 teste, questo attacco infligge 10 danni più 10 danni in più. Se ottieni 2 teste, questo attacco infligge 10 danni più 30 danni. Se ottieni 3 teste, questo attacco infligge 10 danni più 60 danni in più.",
            pt: "Flip 3 moedas. Se você receber 1 cabeças, esse ataque causará 10 danos mais 10 danos. Se você receber 2 cabeças, esse ataque causará 10 danos mais 30 mais danos. Se você receber 3 cabeças, esse ataque causará 10 danos mais 60 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
