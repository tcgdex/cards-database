import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Forretress - 013/088",
         ja: "ForRetress -013/088",
         fr: "Forredress - 013/088",
         de: "ForRetress - 013/088",
         es: "ForRetress - 013/088",
         it: "FORRETRSE - 013/088",
         pt: "Forrerete - 013/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [205],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Exoskeleton",
            ja: "外骨格",
            fr: "Exosquelette",
            de: "Exoskelett",
            es: "Exoesqueleto",
            it: "Esoscheletro",
            pt: "Exoesqueleto",
          },
          effect: {
            en: "All damage done by attacks to Forretress is reduced by 10 <em>(after applying Weakness and Resistance)</em>.",
            ja: "攻撃によってforretressへのすべての損傷は10 <em>（脱力と抵抗を適用した後）</em>に減少します。",
            fr: "Tous les dégâts causés par les attaques à Forredress sont réduits de 10 <em> (après avoir appliqué une faiblesse et une résistance) </em>.",
            de: "Alle Schäden, die durch Angriffe auf Forresspress angerichtet werden, werden um 10 <em> (nach Auftragen von Schwäche und Widerstand) </em> reduziert.",
            es: "Todo el daño causado por los ataques a Forretress se reduce en 10 <em> (después de aplicar debilidad y resistencia) </em>.",
            it: "Tutti i danni arrecati dagli attacchi a Forrettrice sono ridotti di 10 <em> (dopo aver applicato la debolezza e la resistenza) </em>.",
            pt: "Todos os danos causados por ataques ao forretress são reduzidos em 10 (após aplicar fraqueza e resistência) </em>.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Shell Rupture",
            ja: "シェル破裂",
            fr: "Rupture de la coquille",
            de: "Muschelbrech",
            es: "Ruptura de la cáscara",
            it: "Rottura del guscio",
            pt: "Ruptura da concha",
          },
          effect: {
            en: "This attack does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "この攻撃は、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Dieser Angriff schädigt 10 das Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Este ataque causa 10 danos a Pokémon com bancada do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Double Spin",
            ja: "ダブルスピン",
            fr: "Roter",
            de: "Doppelspin",
            es: "Doble giro",
            it: "Doppio giro",
            pt: "Giro duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
            fr: "Flip 2 pièces. Cette attaque fait 40 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 40 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 40 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 40 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
