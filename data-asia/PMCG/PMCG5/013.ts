import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Exeggutor",
         ja: "エリカのexeggutor",
         fr: "L'exaguteur d'Erika",
         de: "Erikas Exeggutor",
         es: "Erika's Exeggutor",
         it: "Exeggutor di Erika",
         pt: "Exeggutor de Erika",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [103],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Psychic Exchange",
            ja: "サイキック交換",
            fr: "Échange psychique",
            de: "Psychischer Austausch",
            es: "Intercambio psíquico",
            it: "Scambio psichico",
            pt: "Troca psíquica",
          },
          effect: {
            en: "Shuffle your hand into your deck, then draw 5 cards.",
            ja: "デッキに手をシャッフルしてから、5枚のカードを描きます。",
            fr: "Merdez votre main dans votre deck, puis dessinez 5 cartes.",
            de: "Mischen Sie Ihre Hand in Ihr Deck und zeichnen Sie dann 5 Karten.",
            es: "Arrastra tu mano en tu mazo, luego dibuja 5 cartas.",
            it: "Shuffle la mano nel tuo mazzo, quindi disegna 5 carte.",
            pt: "Arraste sua mão no baralho e desenhe 5 cartas.",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Stomp",
            ja: "踏みつけ",
            fr: "Piétiner",
            de: "Stomp",
            es: "Pisar muy fuerte",
            it: "Stomp",
            pt: "Stomp",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30のダメージに加えて10ダメージを与えます。尾の場合、この攻撃は30のダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 10 dégâts supplémentaires; Si Tails, cette attaque fait 30 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 30 Schäden plus 10 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 30 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 más de daño; Si Tails, este ataque hace 30 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 10 danni in più; Se coda, questo attacco infligge 30 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 10 mais danos; Se as caudas, esse ataque causam 30 danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
