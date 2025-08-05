import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Jynx",
         ja: "ジンクス",
         fr: "Jynx",
         de: "Jynx",
         es: "Jindo",
         it: "Jynx",
         pt: "Jynx",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [124],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Ice Punch",
            ja: "アイスパンチ",
            fr: "Punch",
            de: "Eispunsch",
            es: "Golpe de hielo",
            it: "Punch di ghiaccio",
            pt: "Soco de gelo",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Powder Snow",
            ja: "パウダースノー",
            fr: "Neige de poudre",
            de: "Pulverschnee",
            es: "Nieve en polvo",
            it: "Neve in polvere",
            pt: "Neve em pó",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
