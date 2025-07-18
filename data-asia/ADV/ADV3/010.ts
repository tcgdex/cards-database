import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Torkoal",
         ja: "トルコール",
         fr: "Torkoal",
         de: "Torkoal",
         es: "Torkoal",
         it: "Torkoal",
         pt: "Torkoal",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [324],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Power Generation",
            ja: "発電",
            fr: "Production d'électricité",
            de: "Stromerzeugung",
            es: "Generación de energía",
            it: "Generazione di energia",
            pt: "Geração de energia",
          },
          effect: {
            en: "Search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them into your hand.",
            ja: "廃棄の山を検索して、最大2つの基本エネルギーカードをforeし、相手に見せて、手に入れます。",
            fr: "Recherchez votre tas de défausse jusqu'à 2 cartes d'énergie de base, montrez-les à votre adversaire et mettez-les dans votre main.",
            de: "Suchen Sie Ihren Abwurfstapel nach bis zu 2 grundlegenden Energiekarten, zeigen Sie ihn Ihrem Gegner an und legen Sie sie in Ihre Hand.",
            es: "Busque en su pila de descarte para hasta 2 tarjetas de energía básicas, muéstrelas a tu oponente y póngalas en tu mano.",
            it: "Cerca il tuo mucchio di scarti per un massimo di 2 carte di energia di base, mostrale al tuo avversario e mettile in mano.",
            pt: "Pesquise sua pilha de descarte por até 2 cartões básicos de energia, mostre -os ao seu oponente e coloque -os em sua mão.",
          },
        },
        {
          cost: ["Fire"],
          name: {
            en: "Scorching Smoke",
            ja: "煙の煙",
            fr: "Fumée brûlante",
            de: "Rauch sengende Rauch",
            es: "Humo abrasador",
            it: "Fumo torrido",
            pt: "Fumaça ardente",
          },
          effect: {
            en: "The Defending Pokemon is now Burned. Flip a coin. If tails, discard a Fire Energy card attached to Torkoal.",
            ja: "防御ポケモンは現在燃やされています。コインをひっくり返します。尾の場合、トルコールに取り付けられた消防剤カードを捨ててください。",
            fr: "Le Pokémon en défense est maintenant brûlé. Retourner une pièce. Si Tails, jetez une carte d'énergie de feu attachée à Torkoal.",
            de: "Das verteidigende Pokemon ist jetzt verbrannt. Eine Münze drehen. Wenn Schwänze, entsorgen Sie eine an Torkoal befestigte Brandenergiekarte.",
            es: "El Pokémon defensor ahora está quemado. Voltea una moneda. Si las colas, deseche una tarjeta de energía de fuego unida a Torkoal.",
            it: "Il Pokemon in carica viene ora bruciato. Capovolgi una moneta. Se coda, scartare una carta di energia antincendio attaccata a Torkoal.",
            pt: "O Pokémon atual agora está queimado. Vire uma moeda. Se a cauda, descarte um cartão de energia de incêndio anexado ao Torkoal.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
