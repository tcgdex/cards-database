import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Janine's Shuckle",
         ja: "ジャニーンのシャックル",
         fr: "La brise de Janine",
         de: "Janine's Shuckle",
         es: "Shuckle de Janine",
         it: "Janine's Shuckle",
         pt: "Janine's Shuckle",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [213],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Sludge",
            ja: "スラッジ",
            fr: "Boue",
            de: "Schlamm",
            es: "Lodo",
            it: "Suddi",
            pt: "Lodo",
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
          damage: 20,
        },
      ],

      retreat: 1,

};
