import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Quilava",
         ja: "ダークキラバ",
         fr: "Quilava sombre",
         de: "Dunkle Quilava",
         es: "Quilava oscura",
         it: "Quilava scura",
         pt: "Quilava escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [156],
      hp: 60,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Incinerate",
            ja: "焼却します",
            fr: "Incinérer",
            de: "Verbrennen",
            es: "Incinerar",
            it: "Incenerire",
            pt: "Incinerar",
          },
          effect: {
            en: "Show the top card of your opponent's deck to all players. If it's a Trainer card, discard it.",
            ja: "すべてのプレイヤーに対戦相手のデッキのトップカードを表示します。トレーナーカードの場合は、捨ててください。",
            fr: "Montrez la carte supérieure du deck de votre adversaire à tous les joueurs. S'il s'agit d'une carte d'entraînement, jetez-la.",
            de: "Zeigen Sie allen Spielern die Top -Karte des Decks Ihres Gegners. Wenn es sich um eine Trainerkarte handelt, verwerfen Sie sie.",
            es: "Muestre la carta superior del mazo de tu oponente a todos los jugadores. Si es una tarjeta de entrenador, deséchela.",
            it: "Mostra la migliore carta del mazzo del tuo avversario a tutti i giocatori. Se è una carta dell'allenatore, scartalo.",
            pt: "Mostre a carta superior do baralho do seu oponente para todos os jogadores. Se for um cartão de treinador, descarte -o.",
          },
        },
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Rushing Magma",
            ja: "急いでマグマ",
            fr: "Magma précipité",
            de: "Rushing Magma",
            es: "Magma apresurado",
            it: "Magma affrettato",
            pt: "Magma apressando",
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

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
