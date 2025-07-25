import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Arbok - 067/128",
         ja: "アーボック-067/128",
         fr: "Arbok - 067/128",
         de: "Arbok - 067/128",
         es: "Arbok - 067/128",
         it: "ARBOK - 067/128",
         pt: "Arbok - 067/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [24],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Poison Spray",
            ja: "毒スプレー",
            fr: "Pulvérisation",
            de: "Giftspray",
            es: "Spray",
            it: "Spray veleno",
            pt: "Spray de veneno",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Poison Reaction",
            ja: "毒反応",
            fr: "Réaction de poison",
            de: "Giftreaktion",
            es: "Reacción venenosa",
            it: "Reazione veleno",
            pt: "Reação de veneno",
          },
          effect: {
            en: "If the Defending Pokemon is Poisoned, this attack does 20 damage plus 20 more damage.",
            ja: "防御ポケモンが毒されている場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
            fr: "Si le Pokémon en défense est empoisonné, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon vergiftet wird, verursacht dieser Angriff 20 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor está envenenado, este ataque hace 20 daños más 20 más de daño.",
            it: "Se il Pokemon in carica viene avvelenato, questo attacco infligge 20 danni più 20 danni.",
            pt: "Se o Pokémon atual for envenenado, esse ataque causará 20 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 1,

};
