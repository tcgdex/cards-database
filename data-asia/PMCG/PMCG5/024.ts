import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Horsea (Lv.16)",
         ja: "Misty's Horsea（LV.16）",
         fr: "Horsea de Misty (LV.16)",
         de: "Misty's Horseas (Lv.16)",
         es: "Misty's Horsea (LV.16)",
         it: "Misty's Farsea (Lv.16)",
         pt: "Misty's Horsea (LV.16)",
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
            en: "Ink Spurt",
            ja: "インクスパート",
            fr: "Pénible",
            de: "Tintenschub",
            es: "Chorro de tinta",
            it: "SPROTTO INSCH",
            pt: "Surto de tinta",
          },
          effect: {
            en: "Flip a coin. If heads, whenever the Defending Pokemon tries to attack, your opponent flips a coin. If tails, that attack does nothing. (This effect lasts until the Defending Pokemon evolves or is Benched.)",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンが攻撃しようとするたびに、相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。 （この効果は、防御するポケモンが進化するか、ベンチになるまで続きます。）",
            fr: "Retourner une pièce. Si les têtes, chaque fois que le Pokémon en défense essaie d'attaquer, votre adversaire retourne une pièce. Si Tails, cette attaque ne fait rien. (Cet effet dure jusqu'à ce que le Pokémon en défense évolue ou soit banc.)",
            de: "Eine Münze drehen. Wenn der Köpfe, wenn das verteidigende Pokemon versucht, anzugreifen, dreht Ihr Gegner eine Münze. Wenn Schwänze, tut dieser Angriff nichts. (Dieser Effekt dauert, bis sich das verteidigende Pokemon entwickelt oder auf die Bank gesetzt wird.)",
            es: "Voltea una moneda. Si se dirige, cada vez que el Pokémon defensor intenta atacar, tu oponente voltea una moneda. Si Tails, ese ataque no hace nada. (Este efecto dura hasta que el Pokémon defensor evoluciona o está en banca).",
            it: "Capovolgi una moneta. Se la testa, ogni volta che il Pokemon in carica cerca di attaccare, il tuo avversario lancia una moneta. Se la coda, quell'attacco non fa nulla. (Questo effetto dura fino a quando il Pokemon in difesa si evolve o è in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, sempre que o pokemon atual tentar atacar, seu oponente vira uma moeda. Se caudas, esse ataque não faz nada. (Este efeito dura até que o Pokémon atual evoluir ou seja bancado.)",
          },
          damage: 20,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
