import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Exeggcute",
         ja: "エリカのexeggcute",
         fr: "EXEGGCUTE d'Erika",
         de: "Erikas Exeggcute",
         es: "Erika's Exeggcute",
         it: "Exeggcute di Erika",
         pt: "Erika de Exeggcute",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [102],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
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
            en: "During your opponent's next turn, whenever Erika's Exeggcute takes damage, divide that damage in half (rounded down to the nearest 10). (Any other effects still happen.)",
            ja: "対戦相手の次のターン中、エリカのexeggcuteがダメージを受けるたびに、そのダメージを半分に分割します（最も近い10に丸められます）。 （他の効果はまだ発生します。）",
            fr: "Au cours du prochain virage de votre adversaire, chaque fois que Exaggcute d'Erika subit des dégâts, divisez ces dégâts en deux (arrondi au 10 le plus proche). (Tout autre effet se produit.)",
            de: "Während der nächsten Runde Ihres Gegners, wenn Erikas Exeggcute Schaden anregt, teilen Sie diesen Schaden in zwei Hälften auf (rund auf die nächste 10). (Es passieren noch andere Effekte.)",
            es: "Durante el próximo turno de tu oponente, cada vez que el exeggcute de Erika recibe daño, divida ese daño por la mitad (redondeado a los 10 más cercanos). (Cualquier otro efecto aún sucede).",
            it: "Durante il prossimo turno del tuo avversario, ogni volta che Exeggcute di Erika subisce danni, dividi quel danno a metà (arrotondato al più vicino 10). (Qualsiasi altro effetto si verifica ancora.)",
            pt: "Durante o próximo turno do seu oponente, sempre que o exeggcute de Erika sofre dano, divida esse dano ao meio (arredondado até os 10 mais próximos). (Quaisquer outros efeitos ainda acontecem.)",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Egg Bomb",
            ja: "卵爆弾",
            fr: "Bombe à œuf",
            de: "Eierbombe",
            es: "Bomba de huevo",
            it: "Bomba d'uovo",
            pt: "Bomba de ovo",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing to the Defending Pokemon and Erika's Exeggcute does 20 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は防御するポケモンとエリカのexeggcuteには何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien au Pokémon en défense et à l'exague d'Erika se fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts mit dem verteidigenden Pokemon und Erikas Exeggcute schädigt sich 20.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada a los Pokémon defensores y el exeggcute de Erika hace 20 daños a sí mismo.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla al Pokemon in carica e l'Exeggcute di Erika fa 20 danni a se stesso.",
            pt: "Vire uma moeda. Se as caudas, esse ataque não faz nada com o defensão defensor e o exeggcute de Erika causam 20 danos a si mesmos.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
