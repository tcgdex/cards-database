import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Magmar",
         ja: "ブレインのマグマー",
         fr: "Magmar de Blaine",
         de: "Blaines Magmar",
         es: "Magmar de Blaine",
         it: "Blaine's Magmar",
         pt: "Magmar de Blaine",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [126],
      hp: 60,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Firebreathing",
            ja: "火の猛烈な",
            fr: "Incendie",
            de: "Feuergebrochen",
            es: "Fogrea",
            it: "Fireshinghing",
            pt: "Rede de fogo",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos; Se caudas, esse ataque causa 10 danos.",
          },
        },
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Lava Burst",
            ja: "溶岩バースト",
            fr: "Éclatement de lave",
            de: "Lava platzte",
            es: "Estallido de lava",
            it: "Lava scoppia",
            pt: "Explosão de lava",
          },
          effect: {
            en: "Discard the top 5 cards of your deck. (If there are fewer than 5 cards in your deck, discard all of them.) This attack does 20 damage for each Fire Energy card you discarded in this way.",
            ja: "デッキのトップ5カードを捨ててください。 （デッキに5枚未満のカードがある場合は、それらすべてを破棄します。）この攻撃は、この方法で廃棄した各火エネルギーカードに対して20のダメージを与えます。",
            fr: "Jetez les 5 meilleures cartes de votre deck. (S'il y a moins de 5 cartes dans votre deck, jetez toutes.) Cette attaque fait 20 dégâts pour chaque carte d'énergie de feu que vous avez jetée de cette manière.",
            de: "Verwerfen Sie die Top 5 Karten Ihres Decks. (Wenn Sie weniger als 5 Karten in Ihrem Deck enthalten, verwerfen Sie alle.) Dieser Angriff schädigt 20 Schaden für jede Brandenergiekarte, die Sie auf diese Weise verworfen haben.",
            es: "Deseche las 5 cartas principales de tu mazo. (Si hay menos de 5 cartas en tu mazo, deséchelos todas). Este ataque hace 20 daños por cada carta de energía de fuego que descartaste de esta manera.",
            it: "Scarta le prime 5 carte del tuo mazzo. (Se ci sono meno di 5 carte nel tuo mazzo, scartarle tutte.) Questo attacco fa 20 danni per ogni carta di energia di fuoco che hai scartato in questo modo.",
            pt: "Descarte as 5 principais cartas do seu baralho. (Se houver menos de 5 cartas no seu baralho, descarte todas elas.) Esse ataque causa 20 de dano por cada cartão de energia de incêndio que você descartou dessa maneira.",
          },
        },
      ],

      retreat: 2,

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
