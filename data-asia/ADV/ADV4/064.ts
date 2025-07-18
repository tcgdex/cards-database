import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Exploud",
         ja: "説明",
         fr: "Explover",
         de: "Exploud",
         es: "Explotar",
         it: "Exploud",
         pt: "Explicar",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [295],
      hp: 120,
      types: ["Colorless"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Breaking Sound",
            ja: "音を破る",
            fr: "Sonneur de rupture",
            de: "Klang brechen",
            es: "Sonido roto",
            it: "Suono di rottura",
            pt: "Breaking Sound",
          },
          effect: {
            en: "Does 10 damage to each of your opponent's Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手の各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dégâts à chacun des pokémon de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 das Pokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a cada Pokémon de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a ciascuno dei Pokemon del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a cada um dos Pokémon do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Bass Control",
            ja: "低音制御",
            fr: "Basse",
            de: "Basskontrolle",
            es: "Control de bajo",
            it: "Controllo dei bassi",
            pt: "Controle de graves",
          },
          effect: {
            en: "Does 30 damage to 1 of your opponent's Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンの1つに30ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 30 dégâts à 1 du pokemon de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 30 am Pokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 30 daños a 1 de los Pokémon de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 30 danni a 1 del Pokemon del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "30 danos a 1 do Pokémon do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Thunderous Roar",
            ja: "雷鳴",
            fr: "Rugissement tonitruant",
            de: "Donnernder Brüllen",
            es: "Rugido atronador",
            it: "Roar fragoroso",
            pt: "Rugido estrondoso",
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
          damage: 30,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Hyper Voice",
            ja: "ハイパーボイス",
            fr: "Hyper voix",
            de: "Hyperstimme",
            es: "Voz hiper",
            it: "Hyper Voice",
            pt: "Voz hiper",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
