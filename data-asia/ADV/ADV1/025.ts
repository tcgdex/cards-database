import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Manectric",
         ja: "マネクリック",
         fr: "Manctrique",
         de: "Männlich",
         es: "Manéctrico",
         it: "Manettrico",
         pt: "Manetric",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [310],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Attract Current",
            ja: "電流を引き付けます",
            fr: "Attirer le courant",
            de: "Strom anziehen",
            es: "Atraer corriente",
            it: "Attirare la corrente",
            pt: "Atrair corrente",
          },
          effect: {
            en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokemon. Shuffle your deck afterward.",
            ja: "デッキを稲妻エネルギーカードに検索し、1枚のポケモンに添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu une carte d'énergie Lightning et fixez-la à 1 de votre Pokémon. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Lightning Energy -Karte und fügen Sie sie an 1 Ihres Pokémons an. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía Lightning y colóquela a 1 de su Pokémon. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta di energia Lightning e collegala a 1 del tuo Pokemon. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho para obter um cartão de energia Lightning e prenda -o a 1 do seu Pokémon. Afaste seu baralho depois.",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Thunder Jolt",
            ja: "サンダージョルト",
            fr: "Secousse du tonnerre",
            de: "Donnerstumpf",
            es: "Trueno",
            it: "Thunder Jolt",
            pt: "Trovão",
          },
          effect: {
            en: "Flip a coin. If tails, Manectric does 10 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、Manectricはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, Manectric fait 10 dégâts à lui-même.",
            de: "Eine Münze drehen. Wenn Schwänze, verursacht Manectric sich 10 Schäden an sich.",
            es: "Voltea una moneda. Si Tails, Manectric hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se code, Manectric fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se as caudas, a Manetric causa 10 danos a si mesmo.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

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
