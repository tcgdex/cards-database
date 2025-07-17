import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Qwilfish",
         ja: "qwilfish",
         fr: "Qwilfish",
         de: "Qwilfish",
         es: "Pez qwil",
         it: "Qwilfish",
         pt: "Qwilfish",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [211],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Poison Sting",
            ja: "毒物",
            fr: "Piqûre de poison",
            de: "Giftstich",
            es: "Picadura de veneno",
            it: "Sting veleno",
            pt: "Picada de veneno",
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
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Needle Storm",
            ja: "針の嵐",
            fr: "Tempête d'aiguille",
            de: "Nadelsturm",
            es: "Tormenta de agujas",
            it: "AGHLE Storm",
            pt: "Tempestade de agulha",
          },
          effect: {
            en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads you get.",
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、あなたが得るヘッドの数の20倍のダメージを与えます。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Cette attaque fait 20 dégâts de temps le nombre de têtes que vous obtenez.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe, die Sie erhalten.",
            es: "Voltea una moneda hasta que obtengas colas. Este ataque hace 20 veces el número de cabezas que obtienes.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Questo attacco fa 20 danni volte il numero di teste che ottieni.",
            pt: "Vire uma moeda até obter caudas. Este ataque causa 20 danos vezes o número de cabeças que você recebe.",
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
