import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Tyranitar - 095/128",
         ja: "タイラニタル-095/128",
         fr: "Tyranitar - 095/128",
         de: "Tyranitar - 095/128",
         es: "Tyranitar - 095/128",
         it: "Tyranitar - 095/128",
         pt: "Tyranitar - 095/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [248],
      hp: 120,
      types: ["Darkness"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Dark Aura",
            ja: "暗いオーラ",
            fr: "Aura noire",
            de: "Dunkle Aura",
            es: "Aura oscura",
            it: "Aura oscura",
            pt: "Aura escura",
          },
          effect: {
            en: "All Energy attached to Tyranitar is Darkness Energy instead of its usual type.",
            ja: "Tyranitarに取り付けられたすべてのエネルギーは、通常のタイプではなくDarkness Energyです。",
            fr: "Toute énergie attachée à Tyranitar est l'énergie de l'obscurité au lieu de son type habituel.",
            de: "Die gesamte Energie, die an Tyranitar angebracht ist, ist Dunkelheit Energie anstelle seines üblichen Typs.",
            es: "Toda la energía unida a Tyranitar es la energía de la oscuridad en lugar de su tipo habitual.",
            it: "Tutta l'energia attaccata a Tyranitar è Darkness Energy invece del suo solito tipo.",
            pt: "Toda a energia ligada à Tyranitar é a Darkness Energy, em vez de seu tipo usual.",
          },
      }],

      attacks: [
        {
          cost: ["Darkness", "Darkness", "Darkness", "Darkness"],
          name: {
            en: "Stamp",
            ja: "スタンプ",
            fr: "Timbre",
            de: "Stempel",
            es: "Estampilla",
            it: "Timbro",
            pt: "Carimbo",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 50 damage plus 10 more damage and does 10 damage to each of your opponent's Benched Pokemon, if any. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は50ダメージに加えて10ダメージを与え、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires et fait 10 dégâts à chacun des pokemon bancés de votre adversaire, le cas échéant. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn dieser Angriff 50 Schäden plus 10 weitere Schäden ansetzt und 10 Schäden an den Bankpokémon Ihres Gegners schädigt, falls vorhanden. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 50 daños más 10 daños más y hace 10 daños a cada Pokémon de banca de tu oponente, si es que hay ningún otro. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 50 danni più 10 danni in più e infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causarão 50 danos mais 10 danos e causam 10 danos a cada um dos Pokémon bancos do seu oponente, se houver. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 4,

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
