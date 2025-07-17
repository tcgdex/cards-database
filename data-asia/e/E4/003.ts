import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Golbat",
         ja: "ゴルバット",
         fr: "Golbat",
         de: "Golbat",
         es: "Golosina",
         it: "Golbat",
         pt: "Golbat",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [42],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Poison Sound Wave",
            ja: "毒音波",
            fr: "Vague sonore de poison",
            de: "Giftschallwelle",
            es: "Onda de sonido venenosa",
            it: "Onda sonora velenosa",
            pt: "Onda sonora de veneno",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused. If tails, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、防御ポケモンは現在毒されます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus. Si la queue, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt. Wenn Schwänze, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido. Si Tails, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso. Se le code, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso. Se o cauda, o pokemon defensor agora está envenenado.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Strength in Numbers",
            ja: "数の強度",
            fr: "Force en nombre",
            de: "Stärke in Zahlen",
            es: "Fuerza en los números",
            it: "Forza nei numeri",
            pt: "Força em números",
          },
          effect: {
            en: "This attack does 30 damage plus 10 more damage for each Zubat, Golbat, and Crobat on your Bench.",
            ja: "この攻撃は、ベンチで30のダメージに加えて、Zubat、Golbat、およびCrobatごとにさらに10ダメージを与えます。",
            fr: "Cette attaque fait 30 dégâts plus 10 dégâts supplémentaires pour chaque Zubat, Golbat et Crobat sur votre banc.",
            de: "Dieser Angriff verursacht 30 Schäden plus 10 weitere Schäden für jeden Zubat, Golbat und Crobat auf Ihrer Bank.",
            es: "Este ataque hace 30 daños más 10 daños más por cada Zubat, Golbat y Crobat en su banco.",
            it: "Questo attacco infligge 30 danni più 10 danni per ogni Zubat, Golbat e Crobat sulla panchina.",
            pt: "Este ataque causa 30 danos mais 10 mais danos a cada Zubat, Golbat e Crobat em seu banco.",
          },
        },
      ],

      retreat: 1,

};
