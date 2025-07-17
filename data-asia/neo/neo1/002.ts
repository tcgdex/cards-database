import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Chikorita",
         ja: "チコリータ",
         fr: "Chikorita",
         de: "Chikorita",
         es: "Chikorita",
         it: "Chikorita",
         pt: "Chikorita",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [152],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Grass"],
          name: {
            en: "Deflector",
            ja: "デフレクター",
            fr: "Déflecteur",
            de: "Deflektor",
            es: "Deflector",
            it: "Deflettore",
            pt: "Defletor",
          },
          effect: {
            en: "During your opponent's next turn, whenever Chikorita takes damage, divide that damage in half (rounded down to the nearest 10). (Any other effects still happen.)",
            ja: "対戦相手の次のターン中、チコリータがダメージを受けるときはいつでも、そのダメージを半分に分けます（最も近い10に丸められます）。 （他の効果はまだ発生します。）",
            fr: "Pendant le prochain virage de votre adversaire, chaque fois que Chikorita subit des dégâts, divisez ces dégâts en deux (arrondi au 10 le plus proche). (Tout autre effet se produit.)",
            de: "Während der nächsten Runde Ihres Gegners teilen Sie diesen Schaden in zwei Hälften (rund auf 10). (Es passieren noch andere Effekte.)",
            es: "Durante el próximo turno de tu oponente, cada vez que Chikorita recibe daño, divida ese daño por la mitad (redondeado a los 10 más cercanos). (Cualquier otro efecto aún sucede).",
            it: "Durante il turno successivo del tuo avversario, ogni volta che Chikorita subisce danni, dividi quel danno a metà (arrotondato al 10 più vicino). (Qualsiasi altro effetto si verifica ancora.)",
            pt: "Durante o próximo turno do seu oponente, sempre que Chikorita sofre dano, divida esse dano ao meio (arredondado até o 10 mais próximo). (Quaisquer outros efeitos ainda acontecem.)",
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
