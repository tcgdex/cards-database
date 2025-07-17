import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "_____'s Chansey",
         ja: "_____のチャンシー",
         fr: "_____ est Chansey",
         de: "_____ 's Chansey",
         es: "_____ Chansey",
         it: "_____ 's Chansey",
         pt: "_____ é Chansey",
      },

      rarity: "Ultra Rare",
      category: "Pokemon",
      dexId: [113],
      hp: 90,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Lucky Egg",
            ja: "ラッキーエッグ",
            fr: "Œuf chanceux",
            de: "Glücksei",
            es: "Huevo de la suerte",
            it: "Uovo fortunato",
            pt: "Lucky Egg",
          },
          effect: {
            en: "Flip a coin. If heads, draw two cards. If tails, shuffle two cards from your hand into your deck. (If you have fewer than 2 cards, shuffle all of them into your deck.)",
            ja: "コインをひっくり返します。頭の場合は、2枚のカードを描きます。尾の場合は、手からデッキに2枚のカードをシャッフルします。 （2枚未満のカードがある場合は、すべてをデッキにシャッフルします。）",
            fr: "Retourner une pièce. Si les têtes, dessinez deux cartes. Si Tails, mélangez deux cartes de votre main dans votre deck. (Si vous avez moins de 2 cartes, mélangez toutes dans votre deck.)",
            de: "Eine Münze drehen. Wenn Köpfe, zeichnen Sie zwei Karten. Wenn Sie Schwänze haben, mischen Sie zwei Karten von Ihrer Hand in Ihr Deck. (Wenn Sie weniger als 2 Karten haben, mischen Sie alle in Ihr Deck.)",
            es: "Voltea una moneda. Si se dirige, dibuje dos cartas. SI Tails, mueva dos cartas de tu mano a tu mazo. (Si tiene menos de 2 cartas, las envuelva todas en su mazo).",
            it: "Capovolgi una moneta. Se la testa, disegna due carte. Se coda, mescola due carte dalla tua mano nel mazzo. (Se hai meno di 2 carte, mescola tutte nel tuo mazzo.)",
            pt: "Vire uma moeda. Se cabeças, desenhe duas cartas. Se a cauda, embaralhe duas cartas da sua mão no baralho. (Se você tiver menos de 2 cartas, embaralhe todas em seu baralho.)",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Lucky Punch",
            ja: "ラッキーパンチ",
            fr: "Coup de poing",
            de: "Glücklicher Schlag",
            es: "Lucky Punch",
            it: "Punch fortunato",
            pt: "Lucky Punch",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて30ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 10 dégâts plus 30 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 30 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 30 más de daño.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni più 30 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 30 mais danos.",
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
