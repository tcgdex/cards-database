import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Phanpy",
         ja: "ファンピー",
         fr: "Phanpie",
         de: "Phanpy",
         es: "Fanpía",
         it: "Fanpy",
         pt: "Phanpy",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [231],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Stampede",
            ja: "スタンピード",
            fr: "Débandade",
            de: "Ansturm",
            es: "Estampida",
            it: "Stampede",
            pt: "Debandada",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Trembler",
            ja: "トレマラー",
            fr: "Tremblement",
            de: "Zittern",
            es: "Temblante",
            it: "Tremante",
            pt: "Trembler",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each Defending Pokemon, and each Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は各防御ポケモンに10ダメージを与え、防御する各ポケモンが麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chaque Pokémon en défense, et chaque Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden an jedem verteidigenden Pokémon, und jedes verteidigende Pokémon ist jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon defensor, y cada Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni a ciascun Pokemon in difesa e ogni Pokemon in difesa è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada Pokémon atual, e cada Pokemon defensor agora está paralisado.",
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
