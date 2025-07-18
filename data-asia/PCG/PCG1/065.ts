import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Clefairy",
         ja: "クリーフ",
         fr: "Clefairy",
         de: "Clefairy",
         es: "Clefairy",
         it: "Clefairy",
         pt: "Clefairy",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [35],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Gesture",
            ja: "ジェスチャー",
            fr: "Geste",
            de: "Geste",
            es: "Gesto",
            it: "Gesto",
            pt: "Gesto",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon and switch it with the Defending Pokemon.  Your opponent chooses the Defending Pokemon to switch.",
            ja: "対戦相手のベンチポケモンを1つ選択し、防御ポケモンに切り替えます。  対戦相手は、防御するポケモンを選択して切り替えます。",
            fr: "Choisissez 1 des pokemon bancés de votre adversaire et changez-le avec le Pokémon en défense.  Votre adversaire choisit le Pokémon en défense pour changer.",
            de: "Wählen Sie 1 der Bankpokemon Ihres Gegners und wechseln Sie es mit dem verteidigenden Pokemon.  Ihr Gegner wählt das verteidigende Pokemon zum Wechseln.",
            es: "Elija 1 de los Pokémon de banca de su oponente y cambie con el Pokémon defensor.  Tu oponente elige el Pokémon defensor para cambiar.",
            it: "Scegli 1 del Pokemon in panchina del tuo avversario e cambialo con il Pokemon in difesa.  Il tuo avversario sceglie il Pokemon in carica da cambiare.",
            pt: "Escolha 1 do Pokémon bancado do seu oponente e troca -o com o Pokémon defensor.  Seu oponente escolhe o pokemon defensor para mudar.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Moon Kick",
            ja: "ムーンキック",
            fr: "Coup de pied de lune",
            de: "Mondkick",
            es: "Patada lunar",
            it: "Calcio di luna",
            pt: "Kick da lua",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
