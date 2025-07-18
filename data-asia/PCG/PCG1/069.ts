import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Chansey",
         ja: "チャンジー",
         fr: "Chansey",
         de: "Chansey",
         es: "Chansey",
         it: "Chansey",
         pt: "Chansey",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [113],
      hp: 90,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sing",
            ja: "歌う",
            fr: "Chanter",
            de: "Singen",
            es: "Cantar",
            it: "Cantare",
            pt: "Cantar",
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
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Egg Surprise",
            ja: "卵の驚き",
            fr: "Surprise",
            de: "Eierüberraschung",
            es: "Sorpresa de huevo",
            it: "Sorpresa dell'uovo",
            pt: "Surpresa de ovos",
          },
          effect: {
            en: "Flip a coin. If heads, Chansey does 50 damage to the Defending Pokemon. If tails, remove 5 damage counters from Chansey. (All if there are less than 5.)",
            ja: "コインをひっくり返します。頭の場合、チャンシーは防御ポケモンに50のダメージを与えます。テールの場合、Chanseyから5つのダメージカウンターを削除します。 （5歳未満の場合はすべて5歳未満の場合）",
            fr: "Retourner une pièce. Si la tête, Chansey fait 50 dégâts au Pokémon en défense. Si Tails, retirez 5 compteurs de dégâts de Chansey. (Tout s'il y en a moins de 5.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, schadet Chansey 50 Schaden für das verteidigende Pokémon. Wenn Schwänze, entfernen Sie 5 Schadenszähler aus Chansey. (Alles, wenn es weniger als 5 gibt)",
            es: "Voltea una moneda. Si se dirige, Chansey hace 50 daños al Pokémon defensor. Si las colas, retire 5 contadores de daño de Chansey. (Todo si hay menos de 5)",
            it: "Capovolgi una moneta. Se la testa, Chansey fa 50 danni al Pokemon in carica. Se coda, rimuovere 5 contatori di danno da Chansey. (Tutto se ci sono meno di 5.)",
            pt: "Vire uma moeda. Se as cabeças, Chansey causar 50 danos ao Pokémon atual. Se as caudas, remova 5 contadores de danos de Chansey. (Tudo se houver menos de 5.)",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
