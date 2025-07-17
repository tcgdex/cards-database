import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Ralts",
         ja: "ラルト",
         fr: "Rals",
         de: "Ralts",
         es: "Ralts",
         it: "Ralti",
         pt: "Ralts",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [280],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pound",
            ja: "ポンド",
            fr: "Livre",
            de: "Pfund",
            es: "Libra",
            it: "Libbra",
            pt: "Libra",
          },
          damage: 10,
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Link Blast",
            ja: "リンクブラスト",
            fr: "Blast de lien",
            de: "Link Explosion",
            es: "Explosión de enlace",
            it: "Blast di collegamento",
            pt: "Link Blast",
          },
          effect: {
            en: "If Ralts and the Defending Pokemon have a different amount of Energy attached to them, this attack's base damage is 10 instead of 40.",
            ja: "ラルトと防御ポケモンのエネルギーが異なるエネルギーを持っている場合、この攻撃のベースダメージは40ではなく10です。",
            fr: "Si Ralts et le Pokémon en défense ont une quantité d'énergie différente qui leur est attachée, les dégâts de base de cette attaque sont de 10 au lieu de 40.",
            de: "Wenn RALTS und das verteidigende Pokémon eine andere Menge an Energie mit sich haben, beträgt der Grundschaden dieses Angriffs 10 anstelle von 40.",
            es: "Si los Ralts y el Pokémon defensor tienen una cantidad diferente de energía unida a ellos, el daño base de este ataque es 10 en lugar de 40.",
            it: "Se Ralts e i Pokemon in difesa hanno una diversa quantità di energia collegata ad essi, il danno di base di questo attacco è 10 anziché 40.",
            pt: "Se os ralts e o pokemon atual tiverem uma quantidade diferente de energia ligada a eles, o dano básico desse ataque é 10 em vez de 40.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
