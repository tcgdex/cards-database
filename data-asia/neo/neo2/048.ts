import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Teddiursa",
         ja: "Teddiursa",
         fr: "Teddiursa",
         de: "Teddiursa",
         es: "Teddiursa",
         it: "Teddiursa",
         pt: "Teddiursa",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [216],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Nap Time",
            ja: "昼寝時間",
            fr: "Temps de sieste",
            de: "Nickerchenzeit",
            es: "Hora de la siesta",
            it: "Time del pisolino",
            pt: "Tempo de soneca",
          },
          effect: {
            en: "Remove all damage counters from Teddiursa. Teddiursa is now Asleep.",
            ja: "Teddiursaからすべてのダメージカウンターを削除します。 Teddiursaは今眠っています。",
            fr: "Retirez tous les compteurs de dégâts de Teddiursa. Teddiursa est maintenant endormi.",
            de: "Entfernen Sie alle Schadenszähler von Teddiursa. Teddiursa schläft jetzt.",
            es: "Retire todos los contadores de daño de TeddiURSA. Teddiursa ahora está dormido.",
            it: "Rimuovere tutti i contatori di danno da Teddiursa. Teddiursa ora dorme.",
            pt: "Remova todos os contadores de danos do Teddiursa. Teddiursa está agora dormindo.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
