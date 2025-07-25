import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Surskit",
         ja: "Surskit",
         fr: "Surskit",
         de: "Surskit",
         es: "Surskit",
         it: "Surskit",
         pt: "Surskit",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [283],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Splash About",
            ja: "スプラッシュについて",
            fr: "Barboter",
            de: "Spritzen Sie herum",
            es: "Salpicar",
            it: "Spruzzare",
            pt: "Cair",
          },
          effect: {
            en: "If Surskit has less Energy attached to it than the Defending Pokemon, this attack does 10 damage plus 10 more damage.",
            ja: "Surskitが防御ポケモンよりもエネルギーが少ない場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
            fr: "Si Surskit a moins d'énergie qui lui est attachée que le Pokémon en défense, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires.",
            de: "Wenn Surskit weniger Energie hat als das verteidigende Pokémon, verursacht dieser Angriff 10 Schaden zuzüglich 10 weitere Schäden.",
            es: "Si Surskit tiene menos energía unida que el Pokémon defensor, este ataque hace 10 daños más 10 daños más.",
            it: "Se il surskit ha meno energia attaccata ad esso rispetto al Pokemon in difesa, questo attacco fa 10 danni più 10 danni in più.",
            pt: "Se Surskit tiver menos energia ligada a ele do que o Pokémon atual, esse ataque causará 10 danos mais 10 danos.",
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
