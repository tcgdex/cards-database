import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Karen's Umbreon",
         ja: "カレンのウンブレオン",
         fr: "Umbreon de Karen",
         de: "Karen's Umbreon",
         es: "Umbreon de Karen",
         it: "Karen's Umbreon",
         pt: "Umbreon de Karen",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [197],
      hp: 60,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Paralyzing Glare",
            ja: "麻痺のまぶしさ",
            fr: "Éblouissement paralysant",
            de: "Lähmende Blendung",
            es: "Resplandor paralizante",
            it: "Abbasso paralizzante",
            pt: "Brilho paralisante",
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
        },
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Gouge",
            ja: "ガウジ",
            fr: "Gouge",
            de: "Gouge",
            es: "Gubia",
            it: "Gouge",
            pt: "GOUGE",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 10 altri danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 danos.",
          },
        },
      ],

      retreat: 1,

};
