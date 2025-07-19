import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Swablu (Delta Species)",
         ja: "スワブー（デルタ種）",
         fr: "Swablu (espèces delta)",
         de: "Swablu (Delta -Arten)",
         es: "Swablu (especie delta)",
         it: "Swablu (Delta Species)",
         pt: "Swablu (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [333],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
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
            en: "If Swablu has less Energy attached to it than the Defending Pokemon, this attack does 10 damage plus 10 more damage.",
            ja: "Swabluが防御ポケモンよりもエネルギーが少ない場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
            fr: "Si Swablu a moins d'énergie qui lui est attaché que le Pokémon en défense, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires.",
            de: "Wenn Swablu weniger Energie hat als das verteidigende Pokemon, verursacht dieser Angriff 10 Schaden zuzüglich 10 mehr Schaden.",
            es: "Si Swablu tiene menos energía unida que el Pokémon defensor, este ataque hace 10 daños más 10 daños más.",
            it: "Se Swablu ha meno energia attaccata ad esso rispetto al Pokemon in difesa, questo attacco fa 10 danni più 10 danni in più.",
            pt: "Se Swablu tiver menos energia ligada a ele do que o Pokémon atual, esse ataque causará 10 danos mais 10 danos.",
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
