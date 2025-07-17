import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Meowth (U)",
         ja: "giovanniのmeowth（u）",
         fr: "Giovanni's Meowth (U)",
         de: "Giovannis Meowth (u)",
         es: "Meowth de Giovanni (u)",
         it: "Giovanni's Meowth (u)",
         pt: "Giovanni's Meowth (u)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [52],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "False Charity",
            ja: "偽の慈善",
            fr: "Fausse charité",
            de: "Falsche Wohltätigkeitsorganisation",
            es: "Caridad falsa",
            it: "Falsa carità",
            pt: "Caridade falsa",
          },
          effect: {
            en: "Flip a coin. If heads, look at the top card of your opponent's deck. If it's a Trainer card, put it in your opponent's discard pile; otherwise, put it into his or her hand.",
            ja: "コインをひっくり返します。頭の場合は、相手のデッキの一番上のカードを見てください。トレーナーカードの場合は、相手の捨てられた山に入れてください。そうでなければ、それを彼または彼女の手に入れてください。",
            fr: "Retourner une pièce. Si les têtes, regardez la carte supérieure du jeu de votre adversaire. S'il s'agit d'une carte d'entraînement, mettez-la dans la pile de défausse de votre adversaire; Sinon, mettez-le dans sa main.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, schauen Sie sich die obere Karte Ihres Gegners an. Wenn es sich um eine Trainerkarte handelt, stecken Sie sie in den Haufen Ihres Gegners. Ansonsten stecken Sie es in seine Hand.",
            es: "Voltea una moneda. Si se dirige, mira la carta superior del mazo de tu oponente. Si es una tarjeta de entrenador, póngala en la pila de descarte de tu oponente; De lo contrario, póngalo en su mano.",
            it: "Capovolgi una moneta. Se la testa, guarda la carta superiore del mazzo del tuo avversario. Se è una carta dell'allenatore, mettila nella pila di scarto del tuo avversario; Altrimenti, metterlo nella sua mano.",
            pt: "Vire uma moeda. Se as cabeças, olhe para a carta superior do baralho do seu oponente. Se for um cartão de treinador, coloque -o na pilha de descarte do seu oponente; Caso contrário, coloque -o em sua mão.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double Scratch",
            ja: "二重スクラッチ",
            fr: "À double égratignure",
            de: "Doppelkratzer",
            es: "Doble rasguño",
            it: "Doppio graffio",
            pt: "Arranhão duplo",
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
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
