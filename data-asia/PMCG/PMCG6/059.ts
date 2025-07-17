import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Machoke",
         ja: "ジョバンニのマチョーク",
         fr: "Machoke de Giovanni",
         de: "Giovannis Machoke",
         es: "Giovanni's Machoke",
         it: "Giovanni's Machoke",
         pt: "Giovanni's Machoke",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [67],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Risky Attack",
            ja: "危険な攻撃",
            fr: "Attaque risquée",
            de: "Riskanter Angriff",
            es: "Ataque arriesgado",
            it: "Attacco rischioso",
            pt: "Ataque de risco",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does no damage to the Defending Pokemon and Giovanni's Machoke does 100 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は防御ポケモンにダメージを与えません。ジョバンニのマチョークはそれ自体に100のダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait aucun dommage au Pokémon en défense et à Giovanni Machoke se fait 100 dégâts.",
            de: "Eine Münze drehen. Wenn Schwänze, verursacht dieser Angriff keinen Schaden an das verteidigende Pokemon und Giovannis Machoke schädigt sich 100 Schäden an sich.",
            es: "Voltea una moneda. Si Tails, este ataque no da daño a los Pokémon defensores y Machoke de Giovanni hace 100 daños a sí mismo.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa danni al Pokemon in carica e il Machoke di Giovanni fa 100 danni a se stesso.",
            pt: "Vire uma moeda. Se as caudas, esse ataque não causam danos aos pokemon defensores e Machoke de Giovanni causam 100 danos a si mesmos.",
          },
          damage: 60,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Headlock",
            ja: "ヘッドロック",
            fr: "Tête de tête",
            de: "Headlock",
            es: "Llave en la cabeza",
            it: "Headlock",
            pt: "Headlock",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and the Defending Pokemon is now Paralyzed. If tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与え、防御ポケモンが麻痺しています。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires et le Pokémon en défense est maintenant paralysé. Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden und das verteidigende Pokémon ist jetzt gelähmt. Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño y el Pokémon defensor ahora está paralizado. Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 20 danni più 20 danni in più e il Pokemon in carica è ora paralizzato. Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos e o pokemon atual agora está paralisado. Se as caudas, esse ataque causam 20 danos.",
          },
        },
      ],

      retreat: 2,

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
