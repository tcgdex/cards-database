import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Aggron",
         ja: "アグロン",
         fr: "Aggron",
         de: "Aggron",
         es: "Aglia",
         it: "Aggron",
         pt: "Aggron",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [306],
      hp: 110,
      types: ["Metal"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Terraforming",
            ja: "テラフォーミング",
            fr: "Terraformant",
            de: "Terraforming",
            es: "Terraformación",
            it: "Terraformante",
            pt: "Terraforming",
          },
          effect: {
            en: "Once during your turn (before your attack), you may look at the top 5 cards from your deck and put them back on top of your deck in any order. This power can't be used if Aggron is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、デッキの上位5枚のカードを見て、任意の順序でデッキの上に戻すことができます。 Aggronが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez regarder les 5 premières cartes de votre deck et les remettre sur votre deck dans n'importe quel ordre. Cette puissance ne peut pas être utilisée si Aggron est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug (vor Ihrem Angriff) sind, können Sie sich die Top 5 Karten von Ihrem Deck von Ihrem Deck ansehen und sie in jeder Reihenfolge wieder auf Ihr Deck legen. Diese Kraft kann nicht angewendet werden, wenn Aggron von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede mirar las 5 cartas principales desde su mazo y volver a colocarlas en la parte superior de su mazo en cualquier orden. Esta potencia no se puede usar si Aggron se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi guardare le prime 5 carte dal tuo mazzo e rimetterle in cima al mazzo in qualsiasi ordine. Questo potere non può essere utilizzato se Aggron è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode olhar para as 5 principais cartas do seu baralho e colocá -las de volta no seu baralho em qualquer ordem. Esse poder não pode ser usado se o Aggron for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Metal Claw",
            ja: "金属爪",
            fr: "Griffe métallique",
            de: "Metallklaue",
            es: "Garra de metal",
            it: "Artiglio di metallo",
            pt: "Garra de metal",
          },
          damage: 50,
        },
        {
          cost: ["Metal", "Metal", "Colorless", "Colorless"],
          name: {
            en: "Mix-Up",
            ja: "ミックスアップ",
            fr: "Mélange",
            de: "Verwechslung",
            es: "Confusión",
            it: "Confusione",
            pt: "Confusão",
          },
          effect: {
            en: "Your opponent discards the top card of his or her deck.",
            ja: "あなたの対戦相手は彼または彼女のデッキの一番上のカードを捨てます。",
            fr: "Votre adversaire rejette la carte supérieure de son deck.",
            de: "Ihr Gegner verwirft die Top -Karte seines Decks.",
            es: "Tu oponente descarta la carta superior de su mazo.",
            it: "Il tuo avversario scarta la carta superiore del suo mazzo.",
            pt: "Seu oponente descarta a carta superior do baralho.",
          },
          damage: 70,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "normal",
        },
      ],
};
