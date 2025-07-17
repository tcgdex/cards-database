import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Remoraid",
         ja: "REMORAID",
         fr: "Remoraid",
         de: "Remoraid",
         es: "Remorada",
         it: "Rimorso",
         pt: "Remoraid",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [223],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Sharpshooting",
            ja: "シャープシュート",
            fr: "Tir de feu",
            de: "Scharfschützen",
            es: "Puntería certera",
            it: "Tiro a tratto",
            pt: "Atirador de nitros",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 of your opponent's Pokemon. This attack does 20 damage to that Pokemon. Don't apply Weakness and Resistance.",
            ja: "コインをひっくり返します。頭の場合は、対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Retourner une pièce. Si les têtes, choisissez un des pokemon de votre adversaire. Cette attaque fait 20 dégâts à ce Pokémon. N'appliquez pas la faiblesse et la résistance.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 20. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Voltea una moneda. Si se dirige, elija 1 del Pokémon de tu oponente. Este ataque hace 20 daños a ese Pokémon. No aplique debilidad y resistencia.",
            it: "Capovolgi una moneta. Se le teste, scegli 1 del Pokemon del tuo avversario. Questo attacco fa 20 danni a quel Pokemon. Non applicare debolezza e resistenza.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 do Pokémon do seu oponente. Este ataque causa 20 danos a esse Pokémon. Não aplique fraqueza e resistência.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
