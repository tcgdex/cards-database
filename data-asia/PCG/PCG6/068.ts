import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Poochyena",
         ja: "プーチエナ",
         fr: "Poochyena",
         de: "Poochyena",
         es: "Poochyena",
         it: "Poochyena",
         pt: "Poochyena",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [261],
      hp: 50,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Roar",
            ja: "ro音",
            fr: "Rugir",
            de: "Brüllen",
            es: "Rugido",
            it: "Ruggito",
            pt: "Rugido",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any.",
            ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant.",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden.",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno.",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina, se presente.",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver.",
          },
        },
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Ambush",
            ja: "待ち伏せ",
            fr: "Embuscade",
            de: "Hinterhalt",
            es: "Emboscada",
            it: "Agguato",
            pt: "Emboscada",
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
        },
      ],
};
