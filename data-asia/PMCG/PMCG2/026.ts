import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Jolteon",
         ja: "ジョルテオン",
         fr: "Jolteon",
         de: "Jolteon",
         es: "Jolteón",
         it: "Jolteon",
         pt: "Jolteon",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [135],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos; Se caudas, esse ataque causa 10 danos.",
          },
          damage: None,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Pin Missile",
            ja: "ピンミサイル",
            fr: "Missile à épingle",
            de: "Pin -Rakete",
            es: "Misil de alfiler",
            it: "Pin missile",
            pt: "PIN míssil",
          },
          effect: {
            en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 4 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 4 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 4 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 4 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
          damage: None,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
