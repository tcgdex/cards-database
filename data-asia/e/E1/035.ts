import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Magmar",
         ja: "マグマー",
         fr: "Magmar",
         de: "Magmar",
         es: "Magmar",
         it: "Magmar",
         pt: "Magmar",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [126],
      hp: 60,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Flaming Punch",
            ja: "燃えるようなパンチ",
            fr: "Punch flamboyant",
            de: "Flammer Schlag",
            es: "Golpe de llamas",
            it: "Punch fiammeggiante",
            pt: "Soco flamejante",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Burned.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant brûlé.",
            de: "Eine Münze drehen. Wenn Köpfe, wird das verteidigende Pokemon jetzt verbrannt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora se quema.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in difesa viene ora bruciato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está queimado.",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Thrash",
            ja: "スラッシュ",
            fr: "Débattre",
            de: "Thrash",
            es: "Movimiento de piernas",
            it: "Thrash",
            pt: "Thrash",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Magmar does 10 damage to itself.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。尾の場合、マグマーはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 10 dégâts supplémentaires. Si Tails, Magmar se fait 10 dégâts.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 10 weitere Schäden. Wenn Schwänze, Magmar schädigt sich 10.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 más de daño. Si Tails, Magmar hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 10 altri danni. Se code, Magmar fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 10 mais danos. Se caudas, Magmar causa 10 danos a si mesmo.",
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
