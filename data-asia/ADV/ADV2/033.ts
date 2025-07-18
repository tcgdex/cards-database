import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Sandshrew",
         ja: "サンドシュー",
         fr: "Sable",
         de: "Sandschirme",
         es: "Ardilla de arena",
         it: "Sandshrew",
         pt: "Sandshrew",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [27],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Poison Needle",
            ja: "毒針",
            fr: "Aiguille de poison",
            de: "Giftnadel",
            es: "Aguja de veneno",
            it: "Ago veleno",
            pt: "Agulha de veneno",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
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
