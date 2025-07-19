import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Snorunt",
         ja: "いびき",
         fr: "Snorunt",
         de: "SCHRORUNT",
         es: "Ronquido",
         it: "Snorunt",
         pt: "Snorunt",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [361],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pebble Throw",
            ja: "ペブルスロー",
            fr: "Lancer des galets",
            de: "Kieselwurf",
            es: "Lanzamiento de guijarros",
            it: "Piccolo di ciottoli",
            pt: "Joga de seixos",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon. This attack does 10 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 des Pokémon bancés de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 der Bankpokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de los Pokémon de banca de tu oponente. Este ataque hace 10 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 del Pokemon in panchina del tuo avversario. Questo attacco fa 10 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon bancado do seu oponente. Este ataque causa 10 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Double Headbutt",
            ja: "ダブルヘッドバット",
            fr: "Double bobutt",
            de: "Doppelkopfbutt",
            es: "Bote de cabeza doble",
            it: "Double Headbutt",
            pt: "Double Headbutt",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
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
