import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Espeon",
         ja: "暗いエスペオン",
         fr: "Espeon noir",
         de: "Dunkler Espeon",
         es: "Espeon oscuro",
         it: "Espeone scuro",
         pt: "Espeon escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [196],
      hp: 60,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Gouge",
            ja: "ガウジ",
            fr: "Gouge",
            de: "Gouge",
            es: "Gubia",
            it: "Gouge",
            pt: "GOUGE",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos; Se caudas, esse ataque causa 10 danos.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Psysplash",
            ja: "psysplash",
            fr: "Psysplash",
            de: "Psysplash",
            es: "Psysplash",
            it: "Psysplash",
            pt: "Psysplash",
          },
          effect: {
            en: "Does 10 damage to each of your opponent's Pokemon for each Energy card attached to that Pokemon. Don't apply Weakness and Resistance.",
            ja: "そのポケモンに取り付けられた各エネルギーカードに対して、対戦相手の各ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Fait 10 dégâts à chacun des pokemon de votre adversaire pour chaque carte d'énergie attachée à ce pokemon. N'appliquez pas la faiblesse et la résistance.",
            de: "Schädigt 10 das Pokémon Ihres Gegners für jede an diesem Pokémon angeschlossene Energiekarte. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Hace 10 daños a cada Pokémon de tu oponente por cada tarjeta de energía unida a ese Pokémon. No aplique debilidad y resistencia.",
            it: "Fa 10 danni a ciascuno dei Pokemon del tuo avversario per ogni carta di energia collegata a quel Pokemon. Non applicare debolezza e resistenza.",
            pt: "10 danos a cada um dos Pokémon do seu oponente para cada cartão de energia ligado a esse Pokémon. Não aplique fraqueza e resistência.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
