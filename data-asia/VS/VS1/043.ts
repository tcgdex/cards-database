import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Pryce's Sneasel",
         ja: "プライスのスニーエル",
         fr: "Sneasel de Pryce",
         de: "Pryces Sneasel",
         es: "SNEASEL de Pryce",
         it: "Sneasel di Pryce",
         pt: "Sneasel de Pryce",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [215],
      hp: 50,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 10,
        },
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Ice Claw",
            ja: "氷の爪",
            fr: "Griffe de glace",
            de: "Eisklaue",
            es: "Garra de hielo",
            it: "Claw di ghiaccio",
            pt: "Garra de gelo",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与え、防御ポケモンが眠っています。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires et le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn dieser Angriff 20 Schäden plus 10 weitere Schäden verursacht und das verteidigende Pokémon jetzt schläft.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño y el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 20 danni più 10 danni in più e il Pokemon in difesa è ormai addormentato.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 mais danos e o Pokémon atual está agora dormindo.",
          },
        },
      ],

      retreat: 1,

};
