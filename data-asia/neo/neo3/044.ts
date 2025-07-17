import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Houndoom",
         ja: "猟犬",
         fr: "Chouchou",
         de: "Houndoom",
         es: "Cebo",
         it: "Houndaom",
         pt: "Houndoom",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [229],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Dark Flame",
            ja: "暗い炎",
            fr: "Flamme noire",
            de: "Dunkle Flamme",
            es: "Llamado oscuro",
            it: "Fiamma scura",
            pt: "Chama escura",
          },
          effect: {
            en: "Discard 1 Fire Energy card attached to Houndoom or this attack does nothing. If there are any Darkness Energy cards in your discard pile, attach 1 of them to Houndoom.",
            ja: "ハウズームに取り付けられた1つの消防剤カードを捨てたり、この攻撃は何もしません。廃棄パイルに闇のエネルギーカードがある場合は、それらの1つをハウンドームに取り付けます。",
            fr: "Jetez 1 carte d'énergie d'incendie attachée à la chasse à la chasse ou cette attaque ne fait rien. S'il y a des cartes d'énergie d'obscurité dans votre tas de défausse, attachez 1 d'entre elles à la trame.",
            de: "Mit dem an Houndoom befestigten Brandenergie -Karte oder diesem Angriff entsorgen Sie nichts. Wenn Sie Dunkelheitsenergiekarten in Ihrem Ablagerungsstapel haben, befestigen Sie 1 von ihnen an Houndoom.",
            es: "Deseche 1 Tarjeta de energía de fuego unida a Hoodoom o este ataque no hace nada. Si hay tarjetas de energía de oscuridad en su pila de descarte, adjunte 1 de ellas a Hoodoom.",
            it: "Scartare 1 carta di energia antincendio attaccata a Houndaom o questo attacco non fa nulla. Se ci sono carte di energia oscurità nella tua pila di scarto, attacca 1 a Houndaom.",
            pt: "Descarte 1 cartão de energia de incêndio anexado ao Houndoom ou esse ataque não faz nada. Se houver algum cartões de energia da escuridão na sua pilha de descarte, anexe 1 deles ao HoundOom.",
          },
          damage: 20,
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Black Fang",
            ja: "黒い牙",
            fr: "Brouille noire",
            de: "Schwarzer Fang",
            es: "Colmillo negro",
            it: "Zanna nera",
            pt: "Black Fang",
          },
          effect: {
            en: "Flip a number of coins equal to the number of Darkness Energy attached to Houndoom. This attack does 30 damage plus 10 more damage for each heads.",
            ja: "猟犬に取り付けられた暗闇のエネルギーの数に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales au nombre d'énergie de l'obscurité attachée au chound. Cette attaque fait 30 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der Anzahl der an Houndoom befestigten Dunkelergie -Energie entspricht. Dieser Angriff verursacht 30 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual al número de energía de la oscuridad unida al HOULDOM. Este ataque hace 30 daños más 10 daños más para cada cabezal.",
            it: "Capovolgi una serie di monete pari al numero di energia oscura attaccata al segugio. Questo attacco infligge 30 danni più 10 danni in più per ogni teste.",
            pt: "Vire uma série de moedas iguais ao número de energia da escuridão anexada ao Houndoom. Este ataque causa 30 danos mais 10 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
