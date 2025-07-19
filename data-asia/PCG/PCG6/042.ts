import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Latios (Delta Species)",
         ja: "ラティオス（デルタ種）",
         fr: "Latios (espèces delta)",
         de: "Latios (Delta -Arten)",
         es: "Latios (especies delta)",
         it: "Latios (specie delta)",
         pt: "Latios (espécies delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [381],
      hp: 80,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Delta Aura",
            ja: "デルタオーラ",
            fr: "Aura delta",
            de: "Delta Aura",
            es: "Aura delta",
            it: "Delta Aura",
            pt: "Delta Aura",
          },
          effect: {
            en: "If you have Latias or Latias ex in play, the attack cost of Latios's Psychic Force is now LightningMetalColorless.",
            ja: "LatiasまたはLatias Exがプレイされている場合、LatiosのPsychic Forceの攻撃コストは今や軽demetalcolorlessになりました。",
            fr: "Si vous avez des Latias ou des Latias en jeu, le coût d'attaque de la force psychique de Latios est maintenant LightningMetalcolorless.",
            de: "Wenn Sie Latias oder Latias EX im Spiel haben, sind die Angriffskosten für Latios 'psychische Kraft jetzt lightningmetalcolorless.",
            es: "Si tienes Latias o Latias ex en juego, el costo de ataque de la fuerza psíquica de Latios ahora es sin rayos.",
            it: "Se hai Latias o Latias Ex in gioco, il costo di attacco della forza psichica di Latios è ora LightningetalColorless.",
            pt: "Se você tem Latias ou Latias ex em jogo, o custo de ataque da força psíquica de Latios agora é LightningMetalColorless.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Dragon Claw",
            ja: "ドラゴンクロー",
            fr: "Griffe de dragon",
            de: "Drachenklaue",
            es: "Garra de dragón",
            it: "Dragon Claw",
            pt: "Garra de dragão",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Metal", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Psychic Force",
            ja: "サイキックフォース",
            fr: "Force psychique",
            de: "Psychische Kraft",
            es: "Fuerza psíquica",
            it: "Forza psichica",
            pt: "Força psíquica",
          },
          effect: {
            en: "If your opponent has no Stage 2 Evolved Pokemon in play, this attack does nothing.",
            ja: "対戦相手にステージ2の進化したポケモンがいない場合、この攻撃は何もしません。",
            fr: "Si votre adversaire n'a pas de Pokémon évolué dans l'étape 2 en jeu, cette attaque ne fait rien.",
            de: "Wenn Ihr Gegner im Spiel kein Pokémon der Stufe 2 hat, tut dieser Angriff nichts.",
            es: "Si tu oponente no tiene Pokémon evolucionado en la etapa 2 en juego, este ataque no hace nada.",
            it: "Se il tuo avversario non ha Pokemon evoluto della fase 2 in gioco, questo attacco non fa nulla.",
            pt: "Se o seu oponente não tiver Pokémon evoluiu o estágio 2 em jogo, esse ataque não faz nada.",
          },
          damage: 80,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
