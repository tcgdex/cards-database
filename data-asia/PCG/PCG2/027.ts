import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Ludicolo",
         ja: "ルディコロ",
         fr: "Ludicolo",
         de: "Ludicolo",
         es: "Ludicolo",
         it: "Ludicolo",
         pt: "Ludicolo",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [272],
      hp: 100,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Swing Dance",
            ja: "スイングダンス",
            fr: "Danse swing",
            de: "Swing Dance",
            es: "Baile de swing",
            it: "Danza swing",
            pt: "Swing Dance",
          },
          effect: {
            en: "Once during your turn (before your attack), you may draw a card. This power can't be used if Ludicolo is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、カードを描くことができます。 Ludicoloが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez dessiner une carte. Ce pouvoir ne peut pas être utilisé si Ludicolo est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie eine Karte zeichnen. Diese Kraft kann nicht angewendet werden, wenn Ludicolo von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede dibujar una carta. Esta potencia no se puede usar si Ludicolo se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi disegnare una carta. Questa potenza non può essere utilizzata se Ludicolo è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode desenhar um cartão. Esse poder não pode ser usado se Ludicolo for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Healing Steps",
            ja: "癒しのステップ",
            fr: "Étapes de guérison",
            de: "Heilschritte",
            es: "Pasos de curación",
            it: "Passi di guarigione",
            pt: "Passos de cura",
          },
          effect: {
            en: "You may discard as many cards as you like from your hand.  If you do, remove that many damage counters from Ludicolo.",
            ja: "あなたはあなたの手から好きなだけ多くのカードを捨てることができます。  そうした場合は、Ludicoloからその多くのダメージカウンターを削除します。",
            fr: "Vous pouvez jeter autant de cartes que vous le souhaitez de votre main.  Si vous le faites, retirez autant de compteurs de dégâts de Ludicolo.",
            de: "Sie können so viele Karten wie Sie von Ihrer Hand wegwerfen.  Wenn Sie dies tun, entfernen Sie so viele Schadenszähler von Ludicolo.",
            es: "Puede descartar tantas tarjetas como desee de su mano.  Si lo hace, elimine los contadores de daños de Ludicolo.",
            it: "Puoi scartare tutte le carte che desideri dalla tua mano.  Se lo fai, rimuovi molti contatori di danno da Ludicolo.",
            pt: "Você pode descartar quantos cartões quiser da sua mão.  Se o fizer, remova muitos contadores de danos de Ludicolo.",
          },
          damage: 30,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Circular Steps",
            ja: "円形のステップ",
            fr: "Étapes circulaires",
            de: "Rundschritte",
            es: "Escalones circulares",
            it: "Passi circolari",
            pt: "Passos circulares",
          },
          effect: {
            en: "Does 10 damage times the number of Pokemon in play (both yours and your opponent's), excluding Ludicolo.",
            ja: "Ludicoloを除いて、Pokemonの数（あなたと対戦相手の両方）の数を10回ダメージします。",
            fr: "Fait 10 dégâts fois le nombre de Pokémon en jeu (à la fois le vôtre et celui de votre adversaire), à l'exclusion de Ludicolo.",
            de: "Hat 10 Schadenszeiten die Anzahl der Pokemon im Spiel (sowohl dein als auch dein und deines Gegners), ausgenommen Ludicolo.",
            es: "Hace 10 veces el número de Pokémon en juego (tanto el tuyo como el de tu oponente), excluyendo a Ludicolo.",
            it: "Fa 10 danni volte il numero di Pokemon in gioco (sia il tuo che il tuo avversario), escluso Ludicolo.",
            pt: "10 danos vezes o número de Pokemon em jogo (tanto o seu quanto o do seu oponente), excluindo Ludicolo.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
