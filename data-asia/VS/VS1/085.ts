import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Bruno's Ursaring",
         ja: "ブルーノのウルサリング",
         fr: "Bruno's Ursaring",
         de: "Brunos Ursaring",
         es: "Bruno está al ursing",
         it: "Ursaring di Bruno",
         pt: "Ursaring de Bruno",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [217],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Light Punch",
            ja: "軽いパンチ",
            fr: "Coup de poing",
            de: "Leichter Schlag",
            es: "Ligero",
            it: "Punch leggero",
            pt: "Punchado leve",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
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
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与え、防御ポケモンが麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires et le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden und das verteidigende Pokémon ist jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño y el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni più 20 danni in più e il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos e o pokemon atual agora está paralisado.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
