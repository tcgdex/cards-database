import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Omanyte (Delta Species)",
         ja: "オマニテ（デルタ種）",
         fr: "Omanyte (espèces delta)",
         de: "Omanyte (Delta -Arten)",
         es: "Omanyte (especie delta)",
         it: "Omanyte (Delta Species)",
         pt: "Omanyte (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [138],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Collect",
            ja: "集める",
            fr: "Collecter",
            de: "Sammeln",
            es: "Recolectar",
            it: "Raccogliere",
            pt: "Coletar",
          },
          effect: {
            en: "Draw 3 cards.",
            ja: "3枚のカードを描きます。",
            fr: "Dessinez 3 cartes.",
            de: "Zeichnen Sie 3 Karten.",
            es: "Dibuja 3 cartas.",
            it: "Disegna 3 carte.",
            pt: "Desenhe 3 cartas.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Water Arrow",
            ja: "水の矢",
            fr: "Flèche d'eau",
            de: "Wasserpfeil",
            es: "Flecha de agua",
            it: "Freccia d'acqua",
            pt: "Seta de água",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 20 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 20 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 20 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 20 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 20 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
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
