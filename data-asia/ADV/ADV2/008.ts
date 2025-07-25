import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Seviper",
         ja: "セビパー",
         fr: "Seviper",
         de: "Seviper",
         es: "Seviper",
         it: "Seviper",
         pt: "Seviper",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [336],
      hp: 80,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Deadly Poison",
            ja: "猛毒",
            fr: "Poison mortel",
            de: "Tödliches Gift",
            es: "Veneno mortal",
            it: "Veleno mortale",
            pt: "Veneno mortal",
          },
          effect: {
            en: "You may discard a Grass Energy card attached to Seviper. If you do, the Defending Pokemon is now Poisoned.",
            ja: "Seviperに取り付けられた草のエネルギーカードを捨てることができます。もしそうなら、防御するポケモンは今や毒されています。",
            fr: "Vous pouvez jeter une carte d'énergie de l'herbe attachée à Seviper. Si vous le faites, le Pokémon en défense est maintenant empoisonné.",
            de: "Sie können eine an Seviper befestigte Grasergiekarte verwerfen. Wenn Sie dies tun, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Puede descartar una tarjeta de energía de césped unida al seviper. Si lo haces, el Pokémon defensor ahora está envenenado.",
            it: "Puoi scartare una carta di energia dell'erba attaccata al seviper. Se lo fai, il Pokemon in carica è ora avvelenato.",
            pt: "Você pode descartar um cartão de energia da grama anexado ao Seviper. Se o fizer, o pokemon defensor agora está envenenado.",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Extra Poison",
            ja: "余分な毒",
            fr: "Poison supplémentaire",
            de: "Zusätzliches Gift",
            es: "Veneno adicional",
            it: "Veleno extra",
            pt: "Veneno extra",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, the Defending Pokemon is now Asleep and Poisoned.",
            ja: "防御ポケモンがポケモンエクスである場合、防御するポケモンは眠って毒されています。",
            fr: "Si le Pokémon en défense est Pokemon-Ex, le Pokémon en défense est maintenant endormi et empoisonné.",
            de: "Wenn das verteidigende Pokemon Pokemon-EX ist, schläft das verteidigende Pokémon jetzt und vergiftet.",
            es: "Si el Pokémon defensor es Pokémon-EX, el Pokémon defensor ahora está dormido y envenenado.",
            it: "Se il Pokemon in carica è Pokemon-Ex, il Pokemon in carica è ora addormentato e avvelenato.",
            pt: "Se o Pokémon atual for Pokemon-Ex, o Pokemon atual agora está dormindo e envenenado.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
