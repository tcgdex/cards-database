import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Scyther",
         ja: "スキスター",
         fr: "Scyther",
         de: "Scyther",
         es: "Esciteta",
         it: "Scither",
         pt: "Scyther",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [123],
      hp: 70,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Swords Dance",
            ja: "剣の踊り",
            fr: "Swords Dance",
            de: "Schwerter tanzen",
            es: "Danza de espadas",
            it: "Danza delle spade",
            pt: "Dança de espadas",
          },
          effect: {
            en: "During your next turn, this Pokemon's Slash attack does 30 more damage (before applying Weakness and Resistance).",
            ja: "次のターン中、このポケモンのスラッシュ攻撃は30回以上のダメージを与えます（脱力感と抵抗を適用する前）。",
            fr: "Au cours de votre prochain tour, cette attaque de slash de Pokémon fait 30 dégâts supplémentaires (avant d'appliquer une faiblesse et une résistance).",
            de: "Während Ihrer nächsten Kurve verursacht der Schrägstrich dieses Pokemons 30 weitere Schäden (bevor Sie Schwäche und Widerstand anwenden).",
            es: "Durante su próximo turno, el ataque de corte de este Pokémon hace 30 daños más (antes de aplicar debilidad y resistencia).",
            it: "Durante il tuo prossimo turno, l'attacco a taglio di questo Pokemon infligge altri 30 danni (prima di applicare debolezza e resistenza).",
            pt: "Durante o seu próximo turno, o ataque de Slash do Pokemon causa mais 30 danos (antes de aplicar fraqueza e resistência).",
          },
          damage: None,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
