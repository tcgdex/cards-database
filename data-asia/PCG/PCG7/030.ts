import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Exeggutor (Delta Species)",
         ja: "exeggutor（デルタ種）",
         fr: "Exagutor (espèce delta)",
         de: "Exeggutor (Delta -Arten)",
         es: "Exeggutor (especie delta)",
         it: "Exeggutor (Delta Species)",
         pt: "Exeggutor (espécies delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [103],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Delta Circle",
            ja: "デルタサークル",
            fr: "Delta cercle",
            de: "Delta -Kreis",
            es: "Círculo delta",
            it: "Delta Circle",
            pt: "Delta Circle",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each Pokemon you have in play that has Delta on its card.",
            ja: "10ダメージに加えて、プレイ中のポケモンごとに10ダメージがあり、そのカードにデルタが付いています。",
            fr: "Fait 10 dégâts plus 10 dégâts supplémentaires pour chaque pokemon que vous avez en jeu qui a delta sur sa carte.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jedes Pokémon, das Sie im Spiel haben, das Delta auf seiner Karte hat.",
            es: "Hace 10 daños más 10 daños más para cada Pokémon que tienes en juego que tiene Delta en su carta.",
            it: "Fa 10 danni più 10 danni in più per ogni Pokemon che hai in gioco che ha Delta sulla sua carta.",
            pt: "10 danos mais 10 mais danos para cada Pokémon que você tem em jogo que tem Delta em sua carta.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Split Bomb",
            ja: "分割爆弾",
            fr: "Bombe partagée",
            de: "Split Bombe",
            es: "Bomba dividida",
            it: "Bomba divisa",
            pt: "Bomba dividida",
          },
          effect: {
            en: "Choose 2 of your opponent's Pokemon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンの2つを選択してください。この攻撃は、それぞれに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 2 du Pokémon de votre adversaire. Cette attaque fait 30 dégâts à chacun d'eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 2 des Pokémon Ihres Gegners. Dieser Angriff schädigt jeden von ihnen 30. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 2 del Pokémon de tu oponente. Este ataque hace 30 daños a cada uno de ellos. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 2 del Pokemon del tuo avversario. Questo attacco fa 30 danni a ciascuno di essi. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 2 do Pokémon do seu oponente. Este ataque causa 30 danos a cada um deles. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
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
