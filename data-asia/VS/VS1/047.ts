import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Clair's Jynx",
         ja: "クレアのジンクス",
         fr: "Jynx de Clair",
         de: "Clairs Jynx",
         es: "Jynx de Clair",
         it: "Jynx di Clair",
         pt: "Jynx de Clair",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [124],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pound",
            ja: "ポンド",
            fr: "Livre",
            de: "Pfund",
            es: "Libra",
            it: "Libbra",
            pt: "Libra",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Strange Kiss",
            ja: "奇妙なキス",
            fr: "Baiser étrange",
            de: "Seltsamer Kuss",
            es: "Beso extraño",
            it: "Strano bacio",
            pt: "Beijo estranho",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage and the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与え、防御ポケモンが混乱しています。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires et le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden und das verteidigende Pokémon ist jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 más de daño y el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni più 10 danni in più e il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos e o pokemon atual agora está confuso.",
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
