import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Aipom",
         ja: "aipom",
         fr: "Aipom",
         de: "Aipom",
         es: "Aipom",
         it: "Aipom",
         pt: "AIPOM",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [190],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Snappy Move",
            ja: "スナッピーな動き",
            fr: "Déplacement accrocheur",
            de: "Bissige Bewegung",
            es: "Movimiento ágil",
            it: "Mossa scattante",
            pt: "Movimento rápido",
          },
          effect: {
            en: "Once during your turn (before your attack), if Aipom is on your Bench, you may draw a card. Then, discard all cards attached to Aipom and put Aipom on the bottom of your deck. You can't use more than 1 Snappy Move PokÃ©-Power each turn.",
            ja: "ターン中（攻撃の前に）一度、Aipomがベンチにいる場合は、カードを描くことができます。次に、Aipomに取り付けられたすべてのカードを破棄し、Aipomをデッキの底に置きます。ターンごとに1つ以上のスナッピーMOVEPokã©Powerを使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si AIPOM est sur votre banc, vous pouvez dessiner une carte. Ensuite, jetez toutes les cartes attachées à AIPOM et mettez AIPOM au bas de votre deck. Vous ne pouvez pas utiliser plus d'un mouvement de mouvement Snappy Poké à chaque virage.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff), wenn Aipom auf Ihrer Bank liegt, können Sie eine Karte zeichnen. Legen Sie dann alle mit Aipom angeschlossenen Karten ab und legen Sie Aipom auf den Boden Ihres Decks. Sie können nicht mehr als 1 bissiger Move Poké-Kraft in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), si Aipom está en su banco, puede dibujar una carta. Luego, deseche todas las cartas adjuntas a Aipom y coloque a Aipom en la parte inferior de su mazo. No puede usar más de 1 movimiento de movimiento ágil en cada turno.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se AIPOM è in panchina, puoi disegnare una carta. Quindi, scartare tutte le carte attaccate ad AIPOM e mettere AIPOM sul fondo del mazzo. Non puoi usare più di 1 mossa scattante Pokã © -Power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o AIPOM estiver em seu banco, você poderá desenhar um cartão. Em seguida, descarte todas as cartas anexadas ao AIPOM e coloque a AIPOM na parte inferior do seu baralho. Você não pode usar mais de 1 movimentação rápida Poké-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Snap Tail",
            ja: "スナップテール",
            fr: "Snap-tail",
            de: "Schwanz schnappen",
            es: "Cola",
            it: "Coda a scatto",
            pt: "CAIXA SNAP",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 10 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
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
