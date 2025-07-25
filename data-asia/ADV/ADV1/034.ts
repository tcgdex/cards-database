import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Hariyama",
         ja: "麻山",
         fr: "Hariyama",
         de: "Hariyama",
         es: "Hariyama",
         it: "Hariyama",
         pt: "Hariyama",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [297],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Super Slap Push",
            ja: "スーパースラッププッシュ",
            fr: "Super Slap Push",
            de: "Super Slap Push",
            es: "SUPER SLAP PUSH",
            it: "Super Slap Push",
            pt: "Super Slap Push",
          },
          effect: {
            en: "Does 20 damage to each Defending Pokemon.",
            ja: "防御する各ポケモンに20のダメージを与えます。",
            fr: "Fait 20 dommages à chaque Pokémon en défense.",
            de: "Schädigt 20 an jedem verteidigenden Pokémon 20.",
            es: "Hace 20 daños a cada Pokémon defensor.",
            it: "Fa 20 danni a ciascun Pokemon in difesa.",
            pt: "Causa 20 danos a cada Pokémon defensor.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Mega Throw",
            ja: "メガスロー",
            fr: "Méga jet",
            de: "Megawurf",
            es: "Mega lanzamiento",
            it: "Mega lancio",
            pt: "Mega arremesso",
          },
          effect: {
            en: "If the Defending Pokemon is a Pokemon-ex, this attack does 40 damage plus 40 more damage.",
            ja: "防御ポケモンがポケモンエクスである場合、この攻撃は40ダメージに加えて40ダメージを与えます。",
            fr: "Si le Pokémon en défense est un Pokemon-Ex, cette attaque fait 40 dégâts plus 40 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon ein Pokemon-EX ist, verursacht dieser Angriff 40 Schaden zuzüglich 40 weitere Schäden.",
            es: "Si el Pokémon defensor es un Pokémon-EX, este ataque hace 40 daños más 40 daños más.",
            it: "Se il Pokemon in difesa è un Pokemon-Ex, questo attacco infligge 40 danni più 40 danni.",
            pt: "Se o Pokémon atual for um Pokemon-Ex, esse ataque causará 40 danos mais 40 danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
