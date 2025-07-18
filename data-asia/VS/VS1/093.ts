import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Rocket's Wobbuffet",
         ja: "ロケットのウォブバッフェット",
         fr: "Wobbuffet de Rocket",
         de: "Rocket's Wobbuffet",
         es: "Wobbuffet de cohete",
         it: "Rocket's Wobbuffet",
         pt: "Wobbuffet de Rocket",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [202],
      hp: 70,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Clumsy Attack",
            ja: "不器用な攻撃",
            fr: "Attaque maladroite",
            de: "Ungeschickter Angriff",
            es: "Torpe ataque",
            it: "Attacco goffo",
            pt: "Ataque desajeitado",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing and does 30 damage to 1 of your Pokemon. (Don’t apply Weakness or Resistance.)",
            ja: "コインをひっくり返します。尾の場合、この攻撃には何もせず、ポケモンの1つに30ダメージを与えます。 （弱さや抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien et fait 30 dégâts à 1 de votre Pokémon. (N'appliquez pas la faiblesse ou la résistance.)",
            de: "Eine Münze drehen. Wenn Schwänze, verursacht dieser Angriff nichts und schädigt 30 Ihres Pokémons 30. (Wenden Sie keine Schwäche oder Widerstand an.)",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada y hace 30 daños a 1 de tu Pokémon. (No aplique debilidad o resistencia).",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla e fa 30 danni a 1 del tuo Pokemon. (Non applicare debolezza o resistenza.)",
            pt: "Vire uma moeda. Se as caudas, esse ataque não causam nada e 30 danos a 1 do seu Pokémon. (Não aplique fraqueza ou resistência.)",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
