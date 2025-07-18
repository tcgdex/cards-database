import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Spoink",
         ja: "spoink",
         fr: "Faire un saut",
         de: "Spoink",
         es: "Chapoteo",
         it: "Spoink",
         pt: "Spoink",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [325],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bounce",
            ja: "バウンス",
            fr: "Rebond",
            de: "Prallen",
            es: "Rebotar",
            it: "Rimbalzo",
            pt: "Quicar",
          },
          effect: {
            en: "After your attack, you may switch Spoink with 1 of your Benched Pokemon.",
            ja: "攻撃の後、ベンチ付きポケモン1匹でSpoinkを切り替えることができます。",
            fr: "Après votre attaque, vous pouvez changer de spoink avec 1 de votre pokemon banc.",
            de: "Nach Ihrem Angriff können Sie Spoink mit einem Ihrer Bank -Pokémon wechseln.",
            es: "Después de su ataque, puede cambiar el spoink con 1 de su Pokémon de banca.",
            it: "Dopo il tuo attacco, puoi cambiare Spoink con 1 del tuo Pokemon in panchina.",
            pt: "Após o seu ataque, você pode trocar de Spoink com 1 do seu Pokémon em banco.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
