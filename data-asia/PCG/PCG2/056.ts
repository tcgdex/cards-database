import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Swellow",
         ja: "スウラー",
         fr: "Sombrer",
         de: "Swellow",
         es: "Brillo",
         it: "Taswello",
         pt: "Swellow",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [277],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Mid-air Crush",
            ja: "空中クラッシュ",
            fr: "Écrasement",
            de: "Mid-Air Crush",
            es: "Enamorado",
            it: "Crush a mezz'aria",
            pt: "Paixão no ar",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 20 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.) Flip a coin. If heads, your opponent discards 1 Energy card, if any, attached to that Pokemon.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）コインをひっくり返します。頭の場合、対戦相手はそのポケモンに添付されている場合、1つのエネルギーカードを破棄します。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 20 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des pokémon bancés.) Retourner une pièce. Si les têtes, votre adversaire rejette la carte d'énergie, le cas échéant, attaché à ce pokemon.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 20. (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Eine Münze drehen. Wenn Sie Köpfe haben, verengt Ihr Gegner, falls vorhanden, 1 Energiemoniemoni an diesem Pokémon angeschlossen.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 20 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca). Voltee una moneda. Si se dirige, tu oponente descarta 1 tarjeta de energía, si la hay, unida a ese Pokémon.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 20 danni a quel Pokemon. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Capoggiare una moneta. Se la testa, il tuo avversario scarta 1 carta energetica, se presente, collegata a quel Pokemon.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 20 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon em bancada.) Vire uma moeda. Se as cabeças, seu oponente descarta 1 cartão de energia, se houver, anexado a esse Pokémon.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Nosedive",
            ja: "ノーシブ",
            fr: "Plongeon",
            de: "Sturzflug",
            es: "Picado vertical",
            it: "Picchiata",
            pt: "Discutido",
          },
          effect: {
            en: "Flip a coin. If tails, Swellow does 10 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、スウェローはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, Swellow se fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Schwänze, schädigt Swellow 10 Schäden an sich.",
            es: "Voltea una moneda. Si Tails, Swellow hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se le code, Swellow fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se caudas, Swellow causa 10 danos a si mesmo.",
          },
          damage: 40,
        },
      ],


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
