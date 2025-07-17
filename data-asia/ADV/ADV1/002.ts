import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Weezing",
         ja: "おしっこ",
         fr: "Faire de la pointe",
         de: "Weezing",
         es: "Weezing",
         it: "Weezing",
         pt: "Weezing",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [110],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Confusion Gas",
            ja: "混乱ガス",
            fr: "Gaz de confusion",
            de: "Verwirrungsgas",
            es: "Gas de confusión",
            it: "Gas di confusione",
            pt: "Gás de confusão",
          },
          effect: {
            en: "The Defending Pokemon is now Confused.",
            ja: "防御ポケモンは今混乱しています。",
            fr: "Le Pokémon en défense est maintenant confus.",
            de: "Das verteidigende Pokemon ist jetzt verwirrt.",
            es: "El Pokémon defensor ahora está confundido.",
            it: "Il Pokemon in carica è ora confuso.",
            pt: "O Pokemon atual agora está confuso.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Poison Smog",
            ja: "毒スモッグ",
            fr: "Smog de poison",
            de: "Giftmog",
            es: "Smog",
            it: "Smog veleno",
            pt: "Poison Smog",
          },
          effect: {
            en: "Each Defending Pokemon is now Poisoned. Does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "それぞれの防御ポケモンは現在中毒になっています。対戦相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Chaque Pokémon défendant est maintenant empoisonné. Fait 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Jedes Verteidigungspokemon ist jetzt vergiftet. Schädigt 10 das Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Cada Pokémon defensor ahora está envenenado. Hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Ogni Pokemon in difesa è ora avvelenato. Fa 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Cada Pokémon atual agora está envenenado. 10 danos a cada um dos Pokémon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 2,

};
