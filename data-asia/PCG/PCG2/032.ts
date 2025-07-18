import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Electrike",
         ja: "電気",
         fr: "Électrike",
         de: "Elektrike",
         es: "Electrídico",
         it: "Elettrike",
         pt: "Eletrike",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [309],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Recharge",
            ja: "充電",
            fr: "Recharger",
            de: "Aufladen",
            es: "Recargar",
            it: "Ricaricare",
            pt: "Recarregar",
          },
          effect: {
            en: "Search your deck for a Lightning Energy card and attach it to Electrike. Shuffle your deck afterward.",
            ja: "デッキを稲妻エネルギーカードに検索し、エレクトリケに添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu une carte d'énergie Lightning et fixez-la à Electke. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Lightning Energy -Karte und befestigen Sie sie an Electrike. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía Lightning y colóquela a Electride. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una scheda energetica Lightning e collegala a Electrike. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um cartão de energia Lightning e prenda -o ao elegante. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
