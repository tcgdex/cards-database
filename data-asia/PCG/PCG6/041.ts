import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Latias (Delta Species)",
         ja: "ラティアス（デルタ種）",
         fr: "Latias (espèces delta)",
         de: "Latias (Delta -Arten)",
         es: "Latias (especie delta)",
         it: "Latias (specie delta)",
         pt: "Latias (espécies Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [380],
      hp: 70,
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
            en: "If you have Latios or Latios ex in play, the attack cost of Latias's Extra Crush is now LightningMetalColorless.",
            ja: "LatiosまたはLatios Exがプレイされている場合、LatiasのExtra Crushの攻撃コストは今ではLightningmetalcolorlessになりました。",
            fr: "Si vous avez les Latios ou Latios Ex en jeu, le coût d'attaque du coup de cœur supplémentaire de Latias est maintenant LightningMetalcolorless.",
            de: "Wenn Sie Latios oder Latios EX im Spiel haben, ist die Angriffskosten von Latias 'zusätzlicher Schwarm jetzt LightningMetalcolorless.",
            es: "Si tienes Latios o Latios EX en juego, el costo de ataque del enamoramiento adicional de Latias ahora es sin rayos.",
            it: "Se hai latios o latios ex in gioco, il costo di attacco della cotta extra di Latias è ora LightningEtalColorless.",
            pt: "Se você tem latios ou latios ex em jogo, o custo de ataque da paixão extra de Latias agora é LightningMetalColorless.",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Spiral Drain",
            ja: "スパイラルドレイン",
            fr: "Spiritin en spirale",
            de: "Spiralabfluss",
            es: "Desagüe",
            it: "Scarico a spirale",
            pt: "Dreno em espiral",
          },
          effect: {
            en: "Remove 2 damage counters from Latias.",
            ja: "Latiasから2つのダメージカウンターを削除します。",
            fr: "Retirez 2 compteurs de dégâts des Latias.",
            de: "Entfernen Sie 2 Schadenszähler von Latias.",
            es: "Retire 2 contadores de daño de Latias.",
            it: "Rimuovere 2 contatori di danno dai lati.",
            pt: "Remova 2 contadores de danos de Latias.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Metal", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Extra Crush",
            ja: "余分なクラッシュ",
            fr: "Coup de cœur supplémentaire",
            de: "Zusätzlicher Schwarm",
            es: "Aplastar",
            it: "Cotta extra",
            pt: "Esmagamento extra",
          },
          effect: {
            en: "If your opponent has no Pokemon-ex in play, this attack does nothing.",
            ja: "対戦相手がPokemon-Exをプレイしていない場合、この攻撃は何もしません。",
            fr: "Si votre adversaire n'a pas de Pokemon-EX en jeu, cette attaque ne fait rien.",
            de: "Wenn Ihr Gegner keinen Pokemon-EX im Spiel hat, tut dieser Angriff nichts.",
            es: "Si tu oponente no tiene Pokémon-EX en el juego, este ataque no hace nada.",
            it: "Se il tuo avversario non ha Pokemon-Ex in gioco, questo attacco non fa nulla.",
            pt: "Se o seu oponente não tem Pokemon-Ex em jogo, esse ataque não fará nada.",
          },
          damage: 80,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
