import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Chinchou",
         ja: "チンチョウ",
         fr: "Chinchou",
         de: "Chinchou",
         es: "Chinchou",
         it: "Chinchou",
         pt: "Chinchou",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [170],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pound",
            ja: "ポンド",
            fr: "Livre",
            de: "Pfund",
            es: "Libra",
            it: "Libbra",
            pt: "Libra",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Spark",
            ja: "スパーク",
            fr: "Étincelle",
            de: "Funke",
            es: "Chispa",
            it: "Scintilla",
            pt: "Fagulha",
          },
          effect: {
            en: "Choose 2 of your opponent's Benched Pokemon.  This attack does 10 damage to each of those Pokemon.  (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンの2つを選択します。  この攻撃は、それらのポケモンのそれぞれに10ダメージを与えます。  （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 2 des pokemon bancés de votre adversaire.  Cette attaque fait 10 dégâts à chacun de ces Pokémon.  (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 2 des Bankpokémon Ihres Gegners.  Dieser Angriff schädigt jedes dieser Pokémon 10.  (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 2 de los Pokémon de banca de tu oponente.  Este ataque hace 10 daños a cada uno de esos Pokémon.  (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 2 del Pokemon in panchina del tuo avversario.  Questo attacco fa 10 danni a ciascuno di quei Pokemon.  (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 2 dos Pokémon com bancos do seu oponente.  Este ataque causa 10 danos a cada um desses Pokémon.  (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 10,
        },
      ],

      retreat: 1,

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
