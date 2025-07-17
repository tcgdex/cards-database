import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Nidorino",
         ja: "ジョバンニのニドリーノ",
         fr: "Nidorino de Giovanni",
         de: "Giovannis Nidorino",
         es: "Nidorino de Giovanni",
         it: "Giovanni's Nidorino",
         pt: "Nidorino de Giovanni",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [33],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Rend",
            ja: "レンド",
            fr: "Déchirer",
            de: "Zerreißen",
            es: "Desgarrar",
            it: "Rend",
            pt: "Rend",
          },
          effect: {
            en: "If the Defending Pokemon already has any damage counters on it, this attack does 20 damage plus 20 more damage. If not, this attack does 20 damage.",
            ja: "ディフェンディングポケモンがすでにダメージカウンターを持っている場合、この攻撃は20ダメージに加えて20ダメージを与えます。そうでない場合、この攻撃は20ダメージを与えます。",
            fr: "Si le Pokémon en défense a déjà des compteurs de dégâts, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires. Sinon, cette attaque fait 20 dégâts.",
            de: "Wenn das verteidigende Pokémon bereits Schadenszähler hat, verursacht dieser Angriff 20 Schaden zuzüglich 20 weitere Schäden. Wenn nicht, verursacht dieser Angriff 20 Schaden.",
            es: "Si el Pokémon defensor ya tiene algún contador de daño, este ataque hace 20 daños más 20 daños más. Si no, este ataque hace 20 daños.",
            it: "Se il Pokemon in carica ha già contatori di danno, questo attacco infligge 20 danni più 20 danni. In caso contrario, questo attacco fa 20 danni.",
            pt: "Se o Pokémon atual já tiver algum contador de danos, esse ataque causará 20 danos mais 20 danos. Caso contrário, esse ataque causa 20 danos.",
          },
        },
      ],

      retreat: 2,

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
