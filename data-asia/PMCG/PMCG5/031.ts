import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Dewgong",
         ja: "ミスティのデューゴン",
         fr: "Dewgong de Misty",
         de: "Mistys Dewgong",
         es: "Misty's Dewgong",
         it: "Dewgong di Misty",
         pt: "Misty está dewgong",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [87],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Ice Throw",
            ja: "アイススロー",
            fr: "Lancer de glace",
            de: "Eiswurf",
            es: "Lanzamiento de hielo",
            it: "Lancio di ghiaccio",
            pt: "Gelo",
          },
          effect: {
            en: "If the Defending Pokemon is Fighting, this attack's base damage is doubled.",
            ja: "防御ポケモンが戦っている場合、この攻撃の基本ダメージは2倍になります。",
            fr: "Si le Pokémon en défense se bat, les dégâts de base de cette attaque sont doublés.",
            de: "Wenn das verteidigende Pokémon kämpft, wird der Grundschaden dieses Angriffs verdoppelt.",
            es: "Si el Pokémon defensor está luchando, el daño base de este ataque se duplica.",
            it: "Se il Pokemon in carica sta combattendo, il danno base di questo attacco viene raddoppiato.",
            pt: "Se o Pokémon atual estiver lutando, o dano básico desse ataque é dobrado.",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Take Down",
            ja: "降ろす",
            fr: "Démonter",
            de: "Notieren",
            es: "Derribar",
            it: "Prendere nota",
            pt: "Derrubar",
          },
          effect: {
            en: "Misty's Dewgong does 20 damage to itself.",
            ja: "MistyのDewgongはそれ自体に20のダメージを与えます。",
            fr: "Misty's Dewgong fait 20 dégâts à lui-même.",
            de: "Mistys Dewgong schädigt sich 20.",
            es: "Dewgong de Misty hace 20 daños a sí mismo.",
            it: "Il Dewgong di Misty fa 20 danni a se stesso.",
            pt: "O orvalho de Misty causa 20 danos a si mesmo.",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
