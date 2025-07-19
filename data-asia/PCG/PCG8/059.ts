import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Delcatty ex",
         ja: "Delcatty ex",
         fr: "Delcatty ex",
         de: "Delcatty Ex",
         es: "Delcatty ex",
         it: "Delcatty Ex",
         pt: "Delcatty Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [301],
      hp: 90,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Constrain",
            ja: "制約",
            fr: "Contraindre",
            de: "Einschränken",
            es: "Constreñir",
            it: "Vincolo",
            pt: "Restringir",
          },
          effect: {
            en: "Once during your turn (before your attack), you may use this power. Each player discards cards until that player has 6 cards in his or her hand. (You discard first.) This power can't be used if Delcatty ex is affected by a Special Condition.",
            ja: "ターン中（攻撃前）に、このパワーを使用できます。各プレイヤーは、そのプレーヤーが手に6枚のカードを持っているまでカードを捨てます。 （最初に廃棄します。）Delcatty Exが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez utiliser cette puissance. Chaque joueur rejette les cartes jusqu'à ce que ce joueur ait 6 cartes dans sa main. (Vous jetez d'abord.) Cette puissance ne peut pas être utilisée si Delcatty Ex est affecté par une condition spéciale.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff) können Sie diese Kraft einsetzen. Jeder Spieler verengt Karten, bis dieser Spieler 6 Karten in der Hand hat. (Sie verwerfen zuerst.) Diese Leistung kann nicht verwendet werden, wenn Delcatty EX von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede usar este poder. Cada jugador descarta cartas hasta que ese jugador tenga 6 cartas en su mano. (Usted descarte primero). Esta potencia no se puede usar si DelCatty EX se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi usare questo potere. Ogni giocatore scarta le carte fino a quando quel giocatore non ha 6 carte in mano. (Ti scarti per primo.) Questa potenza non può essere utilizzata se Delcatty Ex è influenzata da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode usar esse poder. Cada jogador descarta as cartas até que esse jogador tenha 6 cartas na mão. (Você descarta primeiro.) Esse poder não pode ser usado se o Delcatty EX for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Upstream",
            ja: "上流",
            fr: "En amont",
            de: "Stromaufwärts",
            es: "Río arriba",
            it: "A monte",
            pt: "A montante",
          },
          effect: {
            en: "Search your discard pile for all Energy cards. This attack does 10 damage times the number of Energy cards you find there. Show them to your opponent, and put them on top of your deck. Shuffle your deck afterward.",
            ja: "すべてのエネルギーカードの廃棄パイルを検索します。この攻撃は、そこにあるエネルギーカードの数の10回ダメージを与えます。それらを相手に見せて、あなたのデッキの上に置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre tas de défausse pour toutes les cartes d'énergie. Cette attaque fait 10 dégâts le nombre de cartes d'énergie que vous y trouverez. Montrez-les à votre adversaire et mettez-les sur votre jeu. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihren Abwurfstapel nach allen Energiekarten. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Energiekarten, die Sie dort finden. Zeigen Sie sie Ihrem Gegner und legen Sie sie auf Ihr Deck. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su pila de descarte para todas las tarjetas de energía. Este ataque hace 10 veces el número de cartas de energía que encuentras allí. Muéstrales a tu oponente y póngalos en la parte superior de tu mazo. Baraja tu mazo después.",
            it: "Cerca nella pila di scarto per tutte le carte energetiche. Questo attacco fa 10 danni volte il numero di carte energetiche che trovi lì. Mostrali al tuo avversario e mettili sopra il mazzo. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise sua pilha de descarte para obter todos os cartões de energia. Este ataque causa 10 danos vezes o número de cartões de energia que você encontra lá. Mostre -os ao seu oponente e coloque -os em cima do seu baralho. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Tail Slap",
            ja: "テールスラップ",
            fr: "Gifle",
            de: "Schwanzschlag",
            es: "Bofetada",
            it: "Slap di coda",
            pt: "Tail Slap",
          },
          damage: 60,
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
