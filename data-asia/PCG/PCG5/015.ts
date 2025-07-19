import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Growlithe",
         ja: "うなり声",
         fr: "Grogner",
         de: "Knurren",
         es: "Gruñido",
         it: "Growlithe",
         pt: "Growlithe",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [58],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Body Slam",
            ja: "ボディスラム",
            fr: "Claquement de corps",
            de: "Body Slam",
            es: "Cañón de cuerpo",
            it: "Body Slam",
            pt: "Body Slam",
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
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Firebreathing",
            ja: "火の猛烈な",
            fr: "Incendie",
            de: "Feuergebrochen",
            es: "Fogrea",
            it: "Fireshinghing",
            pt: "Rede de fogo",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
