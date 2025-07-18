import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Bugsy's Scizor",
         ja: "Bugsy's Scizor",
         fr: "Bugsy's Scizor",
         de: "Bugsy's Scizor",
         es: "Scizor de Bugsy",
         it: "Bugsy's Scizor",
         pt: "Bugsy's Scizor",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [212],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 10,
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Steel Headbutt",
            ja: "スチールヘッドバット",
            fr: "Coup de tête en acier",
            de: "Stahlkopfbutt",
            es: "Cabezal de acero",
            it: "Headbutt in acciaio",
            pt: "Headbutt de aço",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires. Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden. Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño. Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 10 altri danni. Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 danos. Se as caudas, esse ataque causam 20 danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
