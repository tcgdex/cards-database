import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Aggron",
         ja: "アグロン",
         fr: "Aggron",
         de: "Aggron",
         es: "Aglia",
         it: "Aggron",
         pt: "Aggron",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [306],
      hp: 110,
      types: ["Metal"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Retaliate",
            ja: "報復",
            fr: "User de représailles",
            de: "Revanchieren",
            es: "Tomar represalias",
            it: "Vendicarsi",
            pt: "Retaliar",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on Aggron.",
            ja: "コインをひっくり返します。ヘッドの場合、この攻撃は10倍のダメージ倍のダメージ数をアグロンのカウンターにします。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts fois le nombre de compteurs de dégâts sur Aggron.",
            de: "Eine Münze drehen. Wenn dieser Angriff bei diesem Angriff zehn Schadenszeiten der Anzahl der Schäden auf Aggron verursacht.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 veces el número de contadores de daño en Aggron.",
            it: "Capovolgi una moneta. Se le teste, questo attacco fa 10 danni volte il numero di recitatori di danno su Aggron.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos às vezes o número de contadores de danos ao Aggron.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Mega Punch",
            ja: "メガパンチ",
            fr: "Mega Punch",
            de: "Mega Punch",
            es: "Mega Punch",
            it: "Mega pugno",
            pt: "Mega soco",
          },
          damage: 40,
        },
        {
          cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Double Lariat",
            ja: "ダブルラリアット",
            fr: "Double lariat",
            de: "Doppellariat",
            es: "Doble lariat",
            it: "Double Lariat",
            pt: "Duplo lariat",
          },
          effect: {
            en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の70ダメージ倍になります。",
            fr: "Flip 2 pièces. Cette attaque fait 70 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 70 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 70 daños en el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 70 danni volte al numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 70 danos às vezes o número de cabeças.",
          },
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
