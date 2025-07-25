import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Graveler",
         ja: "砂利",
         fr: "Graveleuse",
         de: "Schotter",
         es: "Grava",
         it: "Graveler",
         pt: "Grave",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [75],
      hp: 70,
      types: ["Fighting"],
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
            en: "Any damage done to Graveler by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "攻撃によって砂利に与えられた損害は、衰弱と抵抗を適用した後）10増加します。",
            fr: "Tout dommage causé à Graveler par les attaques est réduit de 10 (après application de faiblesse et de résistance).",
            de: "Alle Schäden, die durch Angriffe an Kieser angerichtet wurden, wird um 10 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Cualquier daño causado a Graveler por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Graveler dagli attacchi è ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado ao Graveler por ataques é reduzido em 10 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Rock Slide",
            ja: "ロックスライド",
            fr: "Glissement",
            de: "Felsrutsche",
            es: "Tobogán de roca",
            it: "Slide di roccia",
            pt: "Slide de rocha",
          },
          effect: {
            en: "Does 10 damage to 2 of your opponent's Benched Pokemon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンの2つに10ダメージを与えます（1つしかない場合は1）。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dégâts à 2 des Pokémon bancés de votre adversaire (1 s'il n'y en a que 1). (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 von 2 des Pokemon Ihres Gegners (1, wenn es nur 1 gibt). (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a 2 de los pokemon de banca de tu oponente (1 si solo hay 1). (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a 2 del Pokemon in panchina del tuo avversario (1 se c'è solo 1). (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a 2 dos Pokémon bancos do seu oponente (1 se houver apenas 1). (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
