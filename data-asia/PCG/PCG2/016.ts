import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Magcargo",
         ja: "マグカルゴ",
         fr: "Magcargo",
         de: "Magcargo",
         es: "Magcargo",
         it: "Magcargo",
         pt: "Magcargo",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [219],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Smooth Over",
            ja: "滑らかに",
            fr: "Aplanir",
            de: "Glatt über",
            es: "Allanar",
            it: "Liscio",
            pt: "Suavizador",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your deck for a card. Shuffle your deck, then put that card on top of your deck. This power can't be used if Magcargo is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、デッキをカードで検索することができます。デッキをシャッフルしてから、そのカードをデッキの上に置きます。 Magcargoが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher une carte à votre jeu. Mélanger votre deck, puis mettre cette carte sur votre jeu. Cette puissance ne peut pas être utilisée si Magcargo est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einer Karte durchsuchen. Mischen Sie Ihr Deck und legen Sie diese Karte auf Ihr Deck. Diese Kraft kann nicht verwendet werden, wenn Magcargo von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo una carta. Arrastra tu mazo, luego coloca esa carta encima de tu mazo. Este poder no se puede usar si Magcargo se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo una carta. Shuffle il tuo mazzo, quindi metti quella carta sopra il tuo mazzo. Questo potere non può essere utilizzato se Magcargo è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode procurar um cartão para o seu baralho. Arraste o seu baralho e coloque a carta em cima do seu baralho. Esse poder não pode ser usado se o Magcargo for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Knock Over",
            ja: "ノックオーバー",
            fr: "Renverser",
            de: "Umwerfen",
            es: "Derribar",
            it: "Knocking Over",
            pt: "Bate",
          },
          effect: {
            en: "You may discard any Stadium card in play.",
            ja: "プレイ中のスタジアムカードを捨てることができます。",
            fr: "Vous pouvez jeter n'importe quelle carte de stade en jeu.",
            de: "Sie können jede Stadionkarte im Spiel verwerfen.",
            es: "Puede descartar cualquier carta del estadio en juego.",
            it: "Puoi scartare qualsiasi carta dello stadio in gioco.",
            pt: "Você pode descartar qualquer carta do estádio em jogo.",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Combustion",
            ja: "燃焼",
            fr: "Combustion",
            de: "Verbrennung",
            es: "Combustión",
            it: "Combustione",
            pt: "Combustão",
          },
          damage: 50,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
