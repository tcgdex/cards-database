import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Oddish (Lv.15)",
         ja: "エリカの奇妙な（lv.15）",
         fr: "Erika est Oddish (LV.15)",
         de: "Erika ist seltsam (lv.15)",
         es: "Erika's Oddish (LV.15)",
         it: "Erika's Oddish (Lv.15)",
         pt: "Erika de Erika (LV.15)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [43],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Blot",
            ja: "ブロット",
            fr: "Tache",
            de: "Blot",
            es: "Mancha",
            it: "Macchia",
            pt: "Borrão",
          },
          effect: {
            en: "If there are any damage counters on Erika's Oddish, remove 1 of them.",
            ja: "エリカの奇妙なダメージカウンターがある場合は、それらの1つを削除します。",
            fr: "S'il y a des compteurs de dégâts sur Oddish d'Erika, enlevez 1 d'entre eux.",
            de: "Wenn es Schadenszähler auf Erikas Oddish gibt, entfernen Sie 1 davon.",
            es: "Si hay algún contador de daño en Erika's Oddish, retire 1 de ellos.",
            it: "Se ci sono contatori di danno su Oddish di Erika, rimuoverne 1.",
            pt: "Se houver algum balcão de dano sobre o estranho de Erika, remova 1 deles.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Sporadic Sponging",
            ja: "散発的なスポンジ",
            fr: "Éponge sporadique",
            de: "Sporadische Schwamm",
            es: "Esporádico esporádico",
            it: "Spugnatura sporadica",
            pt: "Esponja esporádica",
          },
          effect: {
            en: "If Erika's Oddish has any damage counters on it, flip a coin.  If heads, remove 1 of those damage counters.",
            ja: "ErikaのOddishにダメージカウンターがそれにある場合は、コインをひっくり返します。  ヘッドの場合、それらのダメージカウンターの1つを削除します。",
            fr: "Si Oddish d'Erika a des compteurs de dégâts dessus, retournez une pièce.  Si les têtes, retirez 1 de ces compteurs de dégâts.",
            de: "Wenn Erika's Oddish irgendwelche Schadenszähler hat, drehen Sie eine Münze.  Wenn Köpfe, entfernen Sie 1 dieser Schadenszähler.",
            es: "Si Erika's Oddish tiene algún contador de daño, voltea una moneda.  Si se dirige, retire 1 de esos contadores de daño.",
            it: "Se lo strano di Erika ha contatori di danni su di esso, capovolgi una moneta.  Se la testa, rimuovere 1 di quei contatori di danno.",
            pt: "Se o estranho de Erika tiver algum contador de danos, vire uma moeda.  Se as cabeças, remova 1 desses contadores de danos.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
