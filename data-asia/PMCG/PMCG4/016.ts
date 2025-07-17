import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Flareon",
         ja: "ダークフレアロン",
         fr: "Flareon sombre",
         de: "Dunkler Flareon",
         es: "Escaparrón oscuro",
         it: "Dark Flareon",
         pt: "Flareon escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [136],
      hp: 50,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Rage",
            ja: "怒り",
            fr: "Rage",
            de: "Wut",
            es: "Furia",
            it: "Rabbia",
            pt: "Raiva",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each damage counter on Dark Flareon.",
            ja: "ダークフレレオンの各ダメージカウンターで10ダメージと10ダメージをさらに10回します。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Dark Flareon.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Dark Flareon.",
            es: "Hace 10 daños más 10 10 más de daño por cada mostrador de daño en Dark Flareon.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore di danni su Dark Flareon.",
            pt: "10 danos mais 10 danos mais danos para cada contador de danos em Flareon escuro.",
          },
        },
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Playing with Fire",
            ja: "火で遊ぶ",
            fr: "Jouer avec le feu",
            de: "Mit Feuer spielen",
            es: "Jugando con fuego",
            it: "Giocare con il fuoco",
            pt: "Brincando com fogo",
          },
          effect: {
            en: "Use this attack only if there are any Fire Energy cards attached to Dark Flareon. Flip a coin. If heads, discard 1 of those Energy cards and this attack does 30 damage plus 20 more damage; if tails, this attack does 30 damage.",
            ja: "この攻撃を使用して、ダークフレアンに添付されている火エネルギーカードがある場合にのみ使用してください。コインをひっくり返します。ヘッドの場合、これらのエネルギーカードの1つを捨てて、この攻撃は30ダメージに20回のダメージを与えます。尾の場合、この攻撃は30のダメージを与えます。",
            fr: "Utilisez cette attaque uniquement s'il y a des cartes d'énergie de feu attachées à Dark Flareon. Retourner une pièce. Si les têtes, jetez 1 de ces cartes d'énergie et cette attaque fait 30 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 30 dégâts.",
            de: "Verwenden Sie diesen Angriff nur, wenn an Dark Flareon Brandenergiekarten befestigt sind. Eine Münze drehen. Wenn Sie Köpfe haben, verwerfen Sie 1 dieser Energiekarten und dieser Angriff schädigt 30 Schaden zu 20 weitere Schäden. Wenn Schwänze, verursacht dieser Angriff 30 Schaden.",
            es: "Use este ataque solo si hay alguna carta de energía de fuego unidas a Dark Flareon. Voltea una moneda. Si se dirige, deseche 1 de esas cartas de energía y este ataque hace 30 daños más 20 más de daño; Si Tails, este ataque hace 30 daños.",
            it: "Usa questo attacco solo se ci sono delle carte di energia del fuoco attaccate a Dark Flareon. Capovolgi una moneta. Se le teste, scartare 1 di quelle carte energetiche e questo attacco infligge 30 danni più 20 danni; Se coda, questo attacco infligge 30 danni.",
            pt: "Use este ataque apenas se houver algum cartões de energia de incêndio anexados ao Dark Flareon. Vire uma moeda. Se as cabeças, descarte 1 desses cartões de energia e esse ataque causará 30 danos mais 20 mais danos; Se as caudas, esse ataque causam 30 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
