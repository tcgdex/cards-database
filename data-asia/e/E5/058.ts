import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Piloswine - 058/088",
         ja: "Piloswine -058/088",
         fr: "Piloswine - 058/088",
         de: "Piloswine - 058/088",
         es: "Piloswine - 058/088",
         it: "Piloswine - 058/088",
         pt: "Piloswine - 058/088",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [221],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Impaling Tusk",
            ja: "牙を突き刺す",
            fr: "Empalant la défense",
            de: "Tusk aufspießen",
            es: "Empalmante de colmillo",
            it: "Tusk impalante",
            pt: "Impalando presa",
          },
          damage: 40,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Continuous Charge",
            ja: "継続的な充電",
            fr: "Charge continue",
            de: "Kontinuierliche Gebühr",
            es: "Carga continua",
            it: "Carica continua",
            pt: "Carga contínua",
          },
          effect: {
            en: "Flip 4 coins. This attack does 30 damage plus 20 more damage for each heads. Put a damage counter on Piloswine for each heads.",
            ja: "4コインをひっくり返します。この攻撃は、30のダメージに加えて、ヘッドごとに20のダメージを与えます。各頭のピロスワインにダメージカウンターを置きます。",
            fr: "Flip 4 pièces. Cette attaque fait 30 dégâts plus 20 dégâts supplémentaires pour chaque tête. Mettez un compteur de dégâts sur Piloswine pour chaque tête.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 30 Schäden plus 20 weitere Schäden für jeden Köpfe. Legen Sie für jeden Köpfe einen Schadenschalter auf Piloswine.",
            es: "Flip 4 monedas. Este ataque hace 30 daños más 20 más de daño para cada cabezal. Pon un mostrador de daño en Piloswine para cada cabezal.",
            it: "Flip 4 monete. Questo attacco infligge 30 danni più 20 danni in più per ogni teste. Metti un contatore di danni su Piloswine per ogni teste.",
            pt: "Flip 4 moedas. Este ataque causa 30 danos mais 20 mais danos para cada cabeça. Coloque um balcão de danos em Piloswine para cada cabeça.",
          },
        },
      ],

      retreat: 3,

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
