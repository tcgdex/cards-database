import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Camerupt",
         ja: "カメラプ",
         fr: "CamerUpt",
         de: "Kamerupt",
         es: "Ceroupt",
         it: "Camerupt",
         pt: "Câmera",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [323],
      hp: 90,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Lava Burn",
            ja: "溶岩燃焼",
            fr: "Brûlure de lave",
            de: "Lavabrand",
            es: "Quemadura de lava",
            it: "Lava Burn",
            pt: "Lava Burn",
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
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Colorless", "Colorless"],
          name: {
            en: "Fire Spin",
            ja: "火のスピン",
            fr: "Rotation de feu",
            de: "Feuerspin",
            es: "Giro de fuego",
            it: "Spin",
            pt: "Giro de fogo",
          },
          effect: {
            en: "Discard 2 basic Energy cards attached to Camerupt or this attack does nothing.",
            ja: "カメルアップに取り付けられた2つの基本的なエネルギーカードを廃棄するか、この攻撃は何もしません。",
            fr: "Jetez 2 cartes d'énergie de base attachées à Camerupt ou cette attaque ne fait rien.",
            de: "Abwerfen 2 grundlegende Energiekarten, die an Camerupt angeschlossen sind, oder dieser Angriff tut nichts.",
            es: "Descarte 2 cartas de energía básicas unidas a Camerupt o este ataque no hace nada.",
            it: "Scartare 2 carte di energia di base collegate a Camerupt o questo attacco non fa nulla.",
            pt: "Descarte 2 cartões básicos de energia ligados à câmera ou esse ataque não faz nada.",
          },
          damage: 100,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
