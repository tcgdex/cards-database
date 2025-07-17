import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Breloom",
         ja: "ブレルーム",
         fr: "Bride",
         de: "Breloom",
         es: "Brillo",
         it: "Breloom",
         pt: "Breloom",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [286],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Battle Blast",
            ja: "バトルブラスト",
            fr: "Explosion de combat",
            de: "Battle Explosion",
            es: "Explosión de batalla",
            it: "Battle Blast",
            pt: "Battle Blast",
          },
          effect: {
            en: "Does 40 damage plus 10 more damage for each Fighting Energy attached to Breloom.",
            ja: "Breloomに付随する各戦闘エネルギーに対して、40のダメージと10ダメージがさらに10ダメージを与えます。",
            fr: "Fait 40 dégâts plus 10 dommages supplémentaires pour chaque énergie de combat attachée à Breloom.",
            de: "Fügt 40 Schäden plus 10 weitere Schäden für jede mit Breloom angeschlossene Kampfenergie.",
            es: "Hace 40 daños más 10 daños más por cada energía de combate unida a Breloom.",
            it: "Fa 40 danni più 10 danni in più per ogni energia di combattimento attaccata a breloom.",
            pt: "Causa 40 danos mais 10 mais danos para cada energia de combate ligada à breloom.",
          },
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
