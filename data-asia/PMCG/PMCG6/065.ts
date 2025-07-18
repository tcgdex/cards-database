import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Tauros",
         ja: "ブレインのタウロス",
         fr: "Tauros de Blaine",
         de: "Blaines Tauros",
         es: "Tauros de Blaine",
         it: "Blaine's Tauros",
         pt: "Tauros de Blaine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [128],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "3-Pronged Tail",
            ja: "3張りの尾",
            fr: "Queue à 3 volets",
            de: "3-ausgeglichener Schwanz",
            es: "Cola de 3 puntas",
            it: "Coda a 3 punte",
            pt: "Tail de 3 em aberto",
          },
          effect: {
            en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Full Speed Charge",
            ja: "全速度充電",
            fr: "Charge à pleine vitesse",
            de: "Vollgeschwindigkeitsgebühr",
            es: "Carga de velocidad completa",
            it: "Carica a piena velocità",
            pt: "Carga de velocidade total",
          },
          effect: {
            en: "Flip 4 coins. This attack does 20 damage times the number of heads to the Defending Pokemon and 20 damage times the number tails to Blaine's Tauros.",
            ja: "4コインをひっくり返します。この攻撃は、ディフェンディングポケモンへのヘッド数が20倍になり、ブレインのタウロスの数が20回ダメージします。",
            fr: "Flip 4 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes au Pokémon en défense et 20 dégâts de temps le nombre de queues au Tauros de Blaine.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe zum verteidigenden Pokémon und 20 Schadenszeiten, die die Anzahl der Tauros von Blaines Tauros erscheint.",
            es: "Flip 4 monedas. Este ataque hace 20 tiempos de daño el número de cabezas al Pokémon defensor y 20 veces el número de colas de Blaine's Tauros.",
            it: "Flip 4 monete. Questo attacco fa 20 danni volte il numero di teste al Pokemon in carica e 20 volte il danno il numero di code al Tauros di Blaine.",
            pt: "Flip 4 moedas. Esse ataque causa 20 danos vezes o número de cabeças para o pokemon atual e 20 danos vezes o número de caudas aos Tauros de Blaine.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
