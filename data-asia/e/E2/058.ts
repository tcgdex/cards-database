import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Eevee",
         ja: "Eevee",
         fr: "Eevee",
         de: "Eevee",
         es: "Eevee",
         it: "Eevee",
         pt: "Eevee",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [133],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Charge Up",
            ja: "充電します",
            fr: "Charger",
            de: "Aufladen",
            es: "Cargar",
            it: "Caricare",
            pt: "Carregar",
          },
          effect: {
            en: "Flip a coin. If heads, search your deck for an Energy card and attach it to Eevee. Shuffle your deck afterward.",
            ja: "コインをひっくり返します。頭の場合は、デッキを検索してエネルギーカードを探してEeveeに取り付けます。その後、デッキをシャッフルします。",
            fr: "Retourner une pièce. Si les têtes, recherchez votre jeu une carte d'énergie et fixez-la à Eevee. Mélanger votre deck par la suite.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, suchen Sie Ihr Deck nach einer Energiekarte und fügen Sie sie an eevee hinzu. Mischen Sie anschließend Ihr Deck.",
            es: "Voltea una moneda. Si se dirige, busque en su mazo una tarjeta de energía y adjunto a Eevee. Baraja tu mazo después.",
            it: "Capovolgi una moneta. Se le teste, cerca nel tuo mazzo una carta energetica e collegala a Eevee. Shuffle il tuo mazzo in seguito.",
            pt: "Vire uma moeda. Se as cabeças, procure um cartão de energia e anexe -o a Eevee. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Lunge",
            ja: "突進",
            fr: "Se précipiter",
            de: "Longe",
            es: "Estocada",
            it: "Affondo",
            pt: "Estocada",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
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
