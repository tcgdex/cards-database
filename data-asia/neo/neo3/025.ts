import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Raichu",
         ja: "ライチュ",
         fr: "Raichu",
         de: "Raichu",
         es: "Raichu",
         it: "Raichu",
         pt: "Raichu",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [26],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Thundershock",
            ja: "サンダーショック",
            fr: "Thundershock",
            de: "Donnerschock",
            es: "Tortuga",
            it: "Thundershock",
            pt: "Thundershock",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Lightning"],
          name: {
            en: "Lightning Strike",
            ja: "落雷",
            fr: "Grève de la foudre",
            de: "Blitzschlag",
            es: "Rayo",
            it: "Fulmini",
            pt: "Lightning Strike",
          },
          effect: {
            en: "You may discard all Lightning Energy cards attached to Raichu. If you do, this attack does 80 damage.",
            ja: "Raichuに取り付けられたすべてのLightningエネルギーカードを捨てることができます。もしそうなら、この攻撃は80のダメージを与えます。",
            fr: "Vous pouvez jeter toutes les cartes d'énergie Lightning attachées à Raichu. Si vous le faites, cette attaque fait 80 dégâts.",
            de: "Sie können alle an Raichu befestigten Blitzelenergiekarten verwerfen. Wenn Sie dies tun, verursacht dieser Angriff 80 Schaden.",
            es: "Puede descartar todas las tarjetas de energía de Lightning unidas a Raichu. Si lo haces, este ataque hace 80 daños.",
            it: "Puoi scartare tutte le carte di energia fulmini attaccate a Raichu. Se lo fai, questo attacco infligge 80 danni.",
            pt: "Você pode descartar todos os cartões de energia de raios anexados a Raichu. Se o fizer, esse ataque causa 80 danos.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
