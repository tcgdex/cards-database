import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Golduck",
         ja: "ライトゴルダック",
         fr: "Golucduck léger",
         de: "Leicht Golduck",
         es: "Golduck de luz",
         it: "Golduck chiaro",
         pt: "Golduck leve",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [55],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Flipper Stroke",
            ja: "フリッパーストローク",
            fr: "Coup de flipper",
            de: "Flipperhub",
            es: "Golpeteo",
            it: "Flipper Actus",
            pt: "Golpe de flipper",
          },
          effect: {
            en: "Your opponent looks at the top 3 cards of his or her deck. If any of them are basic Energy cards, he or she may show any number of them to you and put them into his or her hand. You do the same. Either way, each player shuffles his or her deck.",
            ja: "あなたの対戦相手は、彼または彼女のデッキのトップ3カードを見ます。それらのいずれかが基本的なエネルギーカードである場合、彼または彼女はそれらの数をあなたに見せて、彼または彼女の手にそれらを置くことができます。あなたも同じことをします。いずれにせよ、各プレイヤーは自分のデッキをシャッフルします。",
            fr: "Votre adversaire regarde les 3 meilleures cartes de son deck. Si l'une d'entre elles est des cartes d'énergie de base, il peut vous montrer un certain nombre d'entre eux et les mettre dans sa main. Vous faites de même. Quoi qu'il en soit, chaque joueur mélange son deck.",
            de: "Ihr Gegner schaut auf die Top 3 Karten seines Decks. Wenn einer von ihnen grundlegende Energiekarten sind, kann er Ihnen oder sie Ihnen eine beliebige Anzahl von ihnen zeigen und sie in seine Hand legen. Du machst das Gleiche. In jedem Fall schlurft jeder Spieler sein Deck.",
            es: "Tu oponente mira las 3 principales cartas de su mazo. Si alguna de ellas son tarjetas de energía básicas, él o ella pueden mostrarle a cualquiera de ellos y ponerlas en su mano. Haces lo mismo. De cualquier manera, cada jugador baraja su mazo.",
            it: "Il tuo avversario guarda le prime 3 carte del suo mazzo. Se qualcuno di loro è di base di carte energetiche, può mostrarle un numero qualsiasi e metterle nella sua mano. Fai lo stesso. Ad ogni modo, ogni giocatore mescola il suo mazzo.",
            pt: "Seu oponente olha para as três principais cartas do baralho. Se algum deles for cartas básicas de energia, ele ou ela poderá mostrar qualquer número deles para você e colocá -los em sua mão. Você faz o mesmo. De qualquer maneira, cada jogador embaralha seu deck.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Core Blast",
            ja: "コアブラスト",
            fr: "Explosion de base",
            de: "Kernexplosion",
            es: "Explosión de núcleo",
            it: "Blast core",
            pt: "Explosão do núcleo",
          },
          effect: {
            en: "This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokemon.",
            ja: "この攻撃は、防御ポケモンに取り付けられた特別なエネルギーカードごとに30のダメージに加えて20ダメージを与えます。",
            fr: "Cette attaque fait 30 dégâts plus 20 dégâts supplémentaires pour chaque carte d'énergie spéciale attachée au Pokémon en défense.",
            de: "Dieser Angriff verursacht 30 Schäden plus 20 weitere Schäden für jede spezielle Energiekarte, die dem verteidigenden Pokémon angeschlossen ist.",
            es: "Este ataque hace 30 daños más 20 más de daño por cada tarjeta de energía especial unida al Pokémon defensor.",
            it: "Questo attacco infligge 30 danni più 20 danni in più per ogni speciale carta di energia collegata al Pokemon in carica.",
            pt: "Este ataque causa 30 danos mais 20 mais danos a cada cartão de energia especial anexado ao Pokémon defensor.",
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
