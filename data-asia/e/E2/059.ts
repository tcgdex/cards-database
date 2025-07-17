import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Porygon",
         ja: "ポリゴン",
         fr: "Purygon",
         de: "Porygon",
         es: "Fisgón",
         it: "Porygon",
         pt: "Porygon",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [137],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Data Sort",
            ja: "データソート",
            fr: "Tri",
            de: "Datensorten",
            es: "Ordenar de datos",
            it: "Ordinamento dei dati",
            pt: "Classificar dados",
          },
          effect: {
            en: "Flip a coin. If heads, choose a Trainer card from your discard pile, show it to your opponent, and then shuffle it into your deck.",
            ja: "コインをひっくり返します。頭の場合は、廃棄パイルからトレーナーカードを選択し、対戦相手に見せてから、デッキにシャッフルします。",
            fr: "Retourner une pièce. Si les têtes, choisissez une carte d'entraînement dans votre pieu de défausse, montrez-la à votre adversaire, puis mélangez-la dans votre deck.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, wählen Sie eine Trainerkarte von Ihrem Ablagerungsstapel aus, zeigen Sie sie Ihrem Gegner und mischen Sie sie dann in Ihr Deck.",
            es: "Voltea una moneda. Si se dirige, elija una tarjeta de entrenador de su pila de descarte, muéstrela a su oponente y luego muevala en su mazo.",
            it: "Capovolgi una moneta. Se le teste, scegli una carta dell'allenatore dal tuo mucchio di scarti, mostrala al tuo avversario e poi mescola nel tuo mazzo.",
            pt: "Vire uma moeda. Se as cabeças, escolha uma carta de treinador na sua pilha de descarte, mostre -a ao seu oponente e depois anda -a no baralho.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Peck",
            ja: "ペック",
            fr: "Picorer",
            de: "Picken",
            es: "Picotear",
            it: "Peck",
            pt: "Peck",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
