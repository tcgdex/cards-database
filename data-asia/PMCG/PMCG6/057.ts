import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Machop",
         ja: "ジョヴァンニのマチュップ",
         fr: "Machop de Giovanni",
         de: "Giovannis Machop",
         es: "Giovanni's Machop",
         it: "Giovanni's Machop",
         pt: "Giovanni's Machop",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [66],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Chop",
            ja: "チョップ",
            fr: "Hacher",
            de: "Hacken",
            es: "Cortar",
            it: "Taglio",
            pt: "Cortar",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Fury Punch",
            ja: "フューリーパンチ",
            fr: "Coup de poing",
            de: "Fury Punch",
            es: "Fury Punch",
            it: "Fury Punch",
            pt: "Fury Punch",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on Giovanni's Machop.",
            ja: "コインをひっくり返します。ヘッドの場合、この攻撃は20倍のダメージ数のダメージ数がジョバンニのマチュップのカウンターカウンターになります。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts de temps le nombre de compteurs de dégâts sur le machop de Giovanni.",
            de: "Eine Münze drehen. Wenn dieser Angriff in diesem Angriff 20 Schadenszeiten der Anzahl der Schäden auf Giovannis Machop enthält.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 veces el número de contadores de daño en el Machop de Giovanni.",
            it: "Capovolgi una moneta. Se le teste, questo attacco fa 20 danni il numero di contatori di danno sul machop di Giovanni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos às vezes o número de contadores de danos no Machop de Giovanni.",
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
