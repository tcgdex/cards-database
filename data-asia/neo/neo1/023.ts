import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Horsea",
         ja: "馬",
         fr: "Hors-mer",
         de: "Horsesee",
         es: "Horsea",
         it: "Horsea",
         pt: "Horsea",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [116],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Fin Slap",
            ja: "フィンスラップ",
            fr: "Gifle",
            de: "Flosse Slap",
            es: "Bofetada",
            it: "Fin Slap",
            pt: "Fin Slap",
          },
          effect: {
            en: "If an attack damaged Horsea during your opponent's last turn, this attack does 20 damage plus 10 more damage. If not, this attack does 20 damage.",
            ja: "攻撃が対戦相手の最後のターン中に馬を破損した場合、この攻撃は20のダメージに加えて10ダメージを与えます。そうでない場合、この攻撃は20ダメージを与えます。",
            fr: "Si une attaque a endommagé Horsea lors du dernier tour de votre adversaire, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires. Sinon, cette attaque fait 20 dégâts.",
            de: "Wenn ein Angriff während der letzten Runde Ihres Gegners den Heesea beschädigt hat, verursacht dieser Angriff 20 Schaden zuzüglich 10 weiterer Schaden. Wenn nicht, verursacht dieser Angriff 20 Schaden.",
            es: "Si un ataque dañó Horsea durante el último turno de tu oponente, este ataque hace 20 daños más 10 daños más. Si no, este ataque hace 20 daños.",
            it: "Se un attacco ha danneggiato la cavallo durante l'ultimo turno dell'avversario, questo attacco infligge 20 danni più 10 danni. In caso contrario, questo attacco fa 20 danni.",
            pt: "Se um ataque danificou Horsea durante o último turno do seu oponente, esse ataque causará 20 danos mais 10 danos. Caso contrário, esse ataque causa 20 danos.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
