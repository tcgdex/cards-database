import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Zangoose",
         ja: "ZANGOOSE",
         fr: "Zangoose",
         de: "Zangoose",
         es: "Zangoose",
         it: "ZANGOOSE",
         pt: "Zangoose",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [335],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Poison Resistance",
            ja: "毒抵抗",
            fr: "Résistance au poison",
            de: "Giftwiderstand",
            es: "Resistencia al veneno",
            it: "Resistenza al veleno",
            pt: "Resistência ao veneno",
          },
          effect: {
            en: "Zangoose can't be Poisoned.",
            ja: "ザンゴースは毒されることはできません。",
            fr: "Le zangoose ne peut pas être empoisonné.",
            de: "Zangoose kann nicht vergiftet werden.",
            es: "Zangoose no puede ser envenenado.",
            it: "Zangoose non può essere avvelenato.",
            pt: "Zangoose não pode ser envenenado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Target Slash",
            ja: "ターゲットスラッシュ",
            fr: "Target",
            de: "Zielstrich",
            es: "Baratería",
            it: "Target Slash",
            pt: "Slash alvo",
          },
          effect: {
            en: "If the Defending Pokemon is Seviper, this attack does 10 damage plus 30 more damage.",
            ja: "防御ポケモンがセビパーの場合、この攻撃は10ダメージに加えて30ダメージを与えます。",
            fr: "Si le Pokémon en défense est Seviper, cette attaque fait 10 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Seviper ist, verursacht dieser Angriff 10 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor es de Seviper, este ataque hace 10 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è seviper, questo attacco infligge 10 danni più 30 danni.",
            pt: "Se o Pokemon atual for Seviper, esse ataque causará 10 danos mais 30 danos.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Super Slash",
            ja: "スーパースラッシュ",
            fr: "Super slash",
            de: "Super Slash",
            es: "Super Slash",
            it: "Super Slash",
            pt: "Super Slash",
          },
          effect: {
            en: "If the Defending Pokemon is an Evolved Pokemon, this attack does 30 damage plus 30 more damage.",
            ja: "防御ポケモンが進化したポケモンである場合、この攻撃は30ダメージに加えて30ダメージを与えます。",
            fr: "Si le Pokémon en défense est un Pokémon évolué, cette attaque fait 30 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon ein entwickeltes Pokémon ist, verursacht dieser Angriff 30 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor es un Pokémon evolucionado, este ataque hace 30 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è un Pokemon evoluto, questo attacco infligge 30 danni più 30 danni.",
            pt: "Se o Pokémon atual for um Pokémon evoluído, esse ataque causará 30 danos mais 30 danos.",
          },
        },
      ],

      retreat: 1,

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
