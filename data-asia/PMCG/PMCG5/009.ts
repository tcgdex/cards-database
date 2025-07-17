import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Gloom",
         ja: "エリカの暗闇",
         fr: "La morosité d'Erika",
         de: "Erikas Dunkelheit",
         es: "La penumbra de Erika",
         it: "L'oscurità di Erika",
         pt: "Erika's Surgrous",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [44],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Healing Pollen",
            ja: "癒しの花粉",
            fr: "Pollen de guérison",
            de: "Pollen heilen",
            es: "Polen curativo",
            it: "Guarigione del polline",
            pt: "Pólen de cura",
          },
          effect: {
            en: "Flip a coin. If heads, remove 4 damage counters from Erika's Gloom. If Erika's Gloom has fewer damage counters than that, remove all of them.",
            ja: "コインをひっくり返します。頭の場合は、エリカの暗闇から4つのダメージカウンターを削除します。エリカの暗闇にそれよりもダメージカウンターが少ない場合は、それらすべてを削除します。",
            fr: "Retourner une pièce. Si les têtes, retirez 4 compteurs de dégâts de la morosité d'Erika. Si la morosité d'Erika a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Eine Münze drehen. Wenn Köpfe, entfernen Sie 4 Schadenszähler aus Erikas Dunkelheit. Wenn Erikas Dunkelheit weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Voltea una moneda. Si se dirige, retire 4 contadores de daño de la penumbra de Erika. Si la penumbra de Erika tiene menos contadores de daño que eso, retírelos todos.",
            it: "Capovolgi una moneta. Se la testa, rimuovi 4 contatori di danno dall'oscurità di Erika. Se l'oscurità di Erika ha meno contatori di danni di quello, rimuovili tutti.",
            pt: "Vire uma moeda. Se as cabeças, remova 4 contadores de danos da escuridão de Erika. Se a escuridão de Erika tiver menos contadores de danos do que isso, remova todos eles.",
          },
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Magic Pollen",
            ja: "魔法の花粉",
            fr: "Pollen magique",
            de: "Zauberer Pollen",
            es: "Polen mágico",
            it: "Polline magico",
            pt: "Pólen mágico",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep, Confused, Paralyzed, or Poisoned (your choice).",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今、眠っている、混乱し、麻痺し、毒されています（あなたの選択）。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant endormi, confus, paralysé ou empoisonné (votre choix).",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt, verwirrt, gelähmt oder vergiftet (Ihre Wahl).",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido, confundido, paralizado o envenenado (su elección).",
            it: "Capovolgi una moneta. Se le teste, il Pokemon in carica è ora addormentato, confuso, paralizzato o avvelenato (la tua scelta).",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual está dormindo, confuso, paralisado ou envenenado (sua escolha).",
          },
          damage: 30,
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
