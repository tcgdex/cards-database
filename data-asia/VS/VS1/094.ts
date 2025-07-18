import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Rocket's Raikou",
         ja: "ロケットのライコウ",
         fr: "Raikou de Rocket",
         de: "Raikou von Rocket",
         es: "Raikou de cohete",
         it: "Raikou di Rocket",
         pt: "Raikou do foguete",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [243],
      hp: 60,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Rising Thunder",
            ja: "上昇する雷",
            fr: "Thunder montant",
            de: "Aufstrebender Donner",
            es: "Trueno ascendente",
            it: "Tuoni in aumento",
            pt: "Trovão crescente",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage to 1 of your opponent’s Benched Pokemon. If tails, this attack does 20 damage to 1 of your Benched Pokemon. (Don’t apply Weakness or Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は、相手のベンチポケモンの1つに20のダメージを与えます。尾の場合、この攻撃はベンチポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱や抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 20 dégâts à 1 des pokemon bancés de votre adversaire. Si Tails, cette attaque fait 20 dégâts à 1 de votre pokemon banc. (N'appliquez pas la faiblesse ou la résistance pour les Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn der Köpfe, verursacht dieser Angriff 20 Schäden an 1 der Bankpokémon Ihres Gegners. Wenn Schwänze, verursacht dieser Angriff 20 Schäden an 1 Ihres Bankpokémons. (Wenden Sie keine Schwäche oder Widerstand für Bank -Pokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños a 1 de los Pokémon de banca de tu oponente. Si Tails, este ataque hace 20 daños a 1 de su Pokémon de banca. (No aplique debilidad o resistencia para los Pokémon de banca).",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni a 1 del Pokemon in panchina del tuo avversario. Se code, questo attacco fa 20 danni a 1 del tuo Pokemon in panchina. (Non applicare la debolezza o la resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos a 1 dos Pokémon com bancada do seu oponente. Se as caudas, esse ataque causará 20 danos a 1 do seu Pokémon com bancada. (Não aplique fraqueza ou resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 1,

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
