import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Janine's Venomoth",
         ja: "ジャニーンの毒",
         fr: "Venomoth de Janine",
         de: "Janines Venomoth",
         es: "Venomio de Janine",
         it: "Janine's Venomoth",
         pt: "Venomoth de Janine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [49],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Magic Dust",
            ja: "魔法のほこり",
            fr: "Poussière magique",
            de: "Zauberstaub",
            es: "Polvo mágico",
            it: "Polvere magica",
            pt: "Poeira mágica",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now either Asleep, Confused, Paralyzed, or Poisoned (your choice).",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今、眠っている、混乱したり、麻痺したり、毒殺されたりします（あなたの選択）。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant endormi, confus, paralysé ou empoisonné (votre choix).",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokémon jetzt entweder, verwirrt, gelähmt oder vergiftet (Ihre Wahl).",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido, confundido, paralizado o envenenado (su elección).",
            it: "Capovolgi una moneta. Se le teste, il Pokemon in difesa ora è addormentato, confuso, paralizzato o avvelenato (la tua scelta).",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está dormindo, confuso, paralisado ou envenenado (sua escolha).",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Razor Wind",
            ja: "かみそりの風",
            fr: "Vent de rasoir",
            de: "Rasierender Wind",
            es: "Viento de afeitar",
            it: "Vento del rasoio",
            pt: "Vento de barbear",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

};
