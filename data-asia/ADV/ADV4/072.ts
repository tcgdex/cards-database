import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Registeel ex",
         ja: "registeel ex",
         fr: "Registeel ex",
         de: "Registeel Ex",
         es: "Registeel ex",
         it: "Registeel Ex",
         pt: "Registel Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [379],
      hp: 90,
      types: ["Metal"],
      stage: "Basic",

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
            en: "Any damage done to Registeel ex by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "攻撃によってRegisteel Exに与えられた損傷は10倍に減少します（脱力と抵抗を適用した後）。",
            fr: "Tout dommage causé au régisteel EX par les attaques est réduit de 10 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden an Registeel EX durch Angriffe werden um 10 verringert (nach Auftragen von Schwäche und Widerstand).",
            es: "Cualquier daño hecho a Registeel EX por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Registeel Ex dagli attacchi è ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado ao Registel EX por ataques é reduzido em 10 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Metal", "Colorless"],
          name: {
            en: "Steel Wave",
            ja: "鋼波",
            fr: "Vague d'acier",
            de: "Stahlwelle",
            es: "Onda de acero",
            it: "Onda d'acciaio",
            pt: "Onda de aço",
          },
          effect: {
            en: "Does 20 damage to each of your opponent's Benched Pokemon of the same type as the Defending Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "防御ポケモンと同じタイプの対戦相手のベンチポケモンのそれぞれに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 20 dégâts à chacun des pokemon bancés de votre adversaire du même type que le Pokémon en défense. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 20 Schäden an den Bankpokémon Ihres Gegners vom gleichen Typ wie das verteidigende Pokemon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 20 daños a cada Pokémon de banca de tu oponente del mismo tipo que el Pokémon defensor. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 20 danni a ciascuno dei Pokemon in panchina del tuo avversario dello stesso tipo del Pokemon in difesa. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Causa 20 danos a cada um dos Pokémon bancos do seu oponente do mesmo tipo que o Pokémon defensor. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 2,

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
