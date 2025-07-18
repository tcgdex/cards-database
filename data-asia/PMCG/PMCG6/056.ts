import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Mankey",
         ja: "ブレインのマンキー",
         fr: "Blaine's Mankey",
         de: "Blaines Manker",
         es: "Mankey de Blaine",
         it: "Blaine's Mankey",
         pt: "Mankey de Blaine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [56],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pranks",
            ja: "いたずら",
            fr: "Farces",
            de: "Streiche",
            es: "Broma",
            it: "Scherzi",
            pt: "Brincadeiras",
          },
          effect: {
            en: "Flip a coin. If heads, choose a card from your opponent's discard pile and put it on top of his or her deck.",
            ja: "コインをひっくり返します。頭の場合は、相手の捨てられた山からカードを選択し、デッキの上に置きます。",
            fr: "Retourner une pièce. Si les têtes, choisissez une carte dans la pile de votre adversaire et mettez-la sur son deck.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, wählen Sie eine Karte aus dem Ablagerungsstapel Ihres Gegners und legen Sie sie auf sein Deck.",
            es: "Voltea una moneda. Si se dirige, elija una carta de la pila de descarte de su oponente y colóquela encima de su mazo.",
            it: "Capovolgi una moneta. Se le teste, scegli una carta dalla pila di scarto del tuo avversario e mettila sopra il suo mazzo.",
            pt: "Vire uma moeda. Se as cabeças, escolha uma carta da pilha de descarte do seu oponente e coloque -a em cima do deck dele ou dela.",
          },
        },
        {
          cost: ["Fighting"],
          name: {
            en: "Fury Swipes",
            ja: "フューリースワイプ",
            fr: "Fureur glissa",
            de: "Wut wischt",
            es: "Furia golpea",
            it: "Fury Swipes",
            pt: "Fury Swipes",
          },
          effect: {
            en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
