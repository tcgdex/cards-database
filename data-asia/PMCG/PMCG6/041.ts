import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Raichu",
         ja: "Surge's Raichu中t",
         fr: "Le lieutenant de Surge Raichu",
         de: "Raichu von Lt. Surge",
         es: "Raichu del teniente Surge",
         it: "Raichu di Tenente Surge",
         pt: "Raichu do tenente Surge",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Kerzap",
            ja: "ケルザップ",
            fr: "Kerzap",
            de: "Kerzap",
            es: "Kerzap",
            it: "Kerzap",
            pt: "Kerzap",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 30 more damage to the Defending Pokemon and discard all Lightning Energy cards attached to Lt. Surge's Raichu. If tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20のダメージに加えて、防御ポケモンにさらに30ダメージを与え、サージ中佐のライチュに取り付けられたすべての稲妻エネルギーカードを破棄します。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires au Pokémon en défense et jettent toutes les cartes d'énergie de Lightning attachées au Lt. Surge's Raichu. Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn dieser Angriff 20 Schäden plus 30 weitere Schäden an dem verteidigenden Pokemon verursachen und alle Blitzenergiekarten, die an Raichu von Lt. Surge angeschlossen sind, verwerfen. Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 30 más de daño al Pokémon defensor y descarta todas las cartas de energía de Lightning unidas al Raichu del teniente Surge. Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 20 danni più 30 danni al Pokemon in carica e scartare tutte le carte di energia Lightning attaccate al Raichu di Lt. Surge. Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais mais 30 danos ao Pokémon atual e descartarem todos os cartões de energia de raios ligados ao Raichu do tenente Surge. Se as caudas, esse ataque causam 20 danos.",
          },
        },
        {
          cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
          name: {
            en: "Thundertackle",
            ja: "サンダータックル",
            fr: "Thundertackle",
            de: "Thundertackle",
            es: "Tronco",
            it: "Thundertackle",
            pt: "Thundertackle",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, Lt. Surge's Raichu does 20 damage to itself.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。 Tailsの場合、SurgeのRaichu中tはそれ自体に20のダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si Tails, Raichu du lieutenant de Surge se fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze, Raichu von Lt. Surges verursacht 20 Schäden an sich.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si Tails, el Raichu del teniente Surge hace 20 daños a sí mismo.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se Tails, Raichu di Ten. Surge fa 20 danni a se stesso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se Tails, Raichu, do tenente Surge, causa 20 danos a si mesmo.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
