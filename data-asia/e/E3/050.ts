import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Exeggcute - 050/087",
         ja: "exeggcute -050/087",
         fr: "EXEGGCUTE - 050/087",
         de: "Exeggcute - 050/087",
         es: "Exeggcute - 050/087",
         it: "Exeggcute - 050/087",
         pt: "EXEGGCUTE - 050/087",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [102],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Continuous Eggsplosion",
            ja: "連続した卵の幅",
            fr: "Plosion d'œufs continu",
            de: "Kontinuierliche Eiersposition",
            es: "PLOSIÓN CONTINUA",
            it: "Eggsplosion continue",
            pt: "Explosão de ovos contínuos",
          },
          effect: {
            en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltea una moneda hasta que obtengas colas. Este ataque hace 10 veces el número de cabezas.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Vire uma moeda até obter caudas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Energy Support",
            ja: "エネルギーサポート",
            fr: "Soutien énergétique",
            de: "Energieunterstützung",
            es: "Soporte energético",
            it: "Supporto energetico",
            pt: "Suporte energético",
          },
          effect: {
            en: "Flip a coin. If heads, search your deck for a Psychic Energy card and attach it to 1 of your Benched Pokemon. Shuffle your deck afterward.",
            ja: "コインをひっくり返します。頭の場合は、デッキを検索してサイキックエネルギーカードを探して、ベンチ付きポケモン1枚に取り付けます。その後、デッキをシャッフルします。",
            fr: "Retourner une pièce. Si les têtes, recherchez votre deck pour une carte d'énergie psychique et fixez-la à 1 de votre pokemon banc. Mélanger votre deck par la suite.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, suchen Sie Ihr Deck nach einer psychischen Energiekarte und befestigen Sie sie an 1 Ihres Bankpokémon. Mischen Sie anschließend Ihr Deck.",
            es: "Voltea una moneda. Si se dirige, busque en su mazo una tarjeta de energía psíquica y adhiérase a 1 de su Pokémon de banca. Baraja tu mazo después.",
            it: "Capovolgi una moneta. Se le teste, cerca nel tuo mazzo una carta di energia psichica e attaccalo a 1 del tuo Pokemon in panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Vire uma moeda. Se as cabeças, procure um cartão de energia psíquica e anexe -o a 1 do seu Pokémon em banco. Afaste seu baralho depois.",
          },
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
