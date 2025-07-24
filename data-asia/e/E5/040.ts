import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Electrode",
         ja: "電極",
         fr: "Électrode",
         de: "Elektrode",
         es: "Electrodo",
         it: "Elettrodo",
         pt: "Eletrodo",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [101],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Plasma",
            ja: "プラズマ",
            fr: "Plasma",
            de: "Plasma",
            es: "Plasma",
            it: "Plasma",
            pt: "Plasma",
          },
          effect: {
            en: "If there are any Lightning Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Electrode.",
            ja: "廃棄パイルに稲妻エネルギーカードがある場合は、コインをひっくり返します。頭の場合は、それらの1つを電極に取り付けます。",
            fr: "S'il y a des cartes d'énergie Lightning dans votre tas de défausse, retournez une pièce. Si les têtes, attachez 1 d'entre elles à l'électrode.",
            de: "Wenn Sie Lightning Energy -Karten in Ihrem Ablagerungsstapel enthalten, drehen Sie eine Münze um. Wenn Köpfe, befestigen Sie 1 von ihnen an der Elektrode.",
            es: "Si hay tarjetas de energía de rayos en su pila de descarte, voltea una moneda. Si se dirige, unir 1 de ellos al electrodo.",
            it: "Se ci sono carte di energia Lightning nella tua pila di scarto, capovolgi una moneta. Se le teste, collega 1 di esse all'elettrodo.",
            pt: "Se houver cartas de energia raios em sua pilha de descarte, vire uma moeda. Se as cabeças, prenda 1 deles ao eletrodo.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
          name: {
            en: "Selfdestruct",
            ja: "セルフデストラクト",
            fr: "Auto-destruction",
            de: "Selbstdestrukturierung",
            es: "Auto -inestructo",
            it: "Autodestrutto",
            pt: "Autodestruir",
          },
          effect: {
            en: "This attack does 20 damage to each Pokemon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokemon.) Electrode does 100 damage to itself.",
            ja: "この攻撃は、各プレイヤーのベンチで各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）電極はそれ自体に100の損傷を与えます。",
            fr: "Cette attaque fait 20 dégâts à chaque Pokémon sur le banc de chaque joueur. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) L'électrode se fait 100 dommages.",
            de: "Dieser Angriff schädigt jedes Pokémon auf der Bank jedes Spielers 20. (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Elektrode schädigt sich 100.",
            es: "Este ataque hace 20 daños a cada Pokémon en el banco de cada jugador. (No aplique debilidad y resistencia para Pokémon de banca). El electrodo hace 100 daños a sí mismo.",
            it: "Questo attacco infligge 20 danni a ciascun Pokemon sulla panchina di ogni giocatore. (Non applicare debolezza e resistenza per i Pokemon in panchina.) L'elettrodo fa 100 danni a se stesso.",
            pt: "Este ataque causa 20 danos a cada Pokémon no banco de cada jogador. (Não aplique fraqueza e resistência ao Pokemon em bancada.) O eletrodo causa 100 danos a si mesmo.",
          },
          damage: 100,
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
