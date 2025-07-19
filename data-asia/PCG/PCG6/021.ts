import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Salamence (Delta Species)",
         ja: "サラメンス（デルタ種）",
         fr: "Salamence (espèces delta)",
         de: "Salamence (Delta -Arten)",
         es: "Salamencia (especie delta)",
         it: "Salamence (Delta Species)",
         pt: "Salamence (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [373],
      hp: 110,
      types: ["Fire"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Fire Dance",
            ja: "ファイアダンス",
            fr: "Danse du feu",
            de: "Feuertanz",
            es: "Baile de fuego",
            it: "Danza del fuoco",
            pt: "Dance de fogo",
          },
          effect: {
            en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokemon.",
            ja: "廃棄の山を検索して、ファイアエネルギーカードを使用して、1枚のポケモンに取り付けます。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie de feu et attachez-la à 1 de votre Pokémon.",
            de: "Suchen Sie Ihren Abwurfstapel nach einer Feuerergiekarte und befestigen Sie sie an 1 Ihres Pokémon.",
            es: "Busque en su pila de descarte una tarjeta de energía de fuego y adjunte a 1 de su Pokémon.",
            it: "Cerca il tuo mucchio di scarti per una carta di energia antincendio e attaccalo a 1 del tuo Pokemon.",
            pt: "Pesquise sua pilha de descarte para obter um cartão de energia de incêndio e anexe -o a 1 do seu Pokémon.",
          },
          damage: 30,
        },
        {
          cost: ["Fire", "Metal", "Colorless", "Colorless"],
          name: {
            en: "Delta Blast",
            ja: "デルタブラスト",
            fr: "Delta Blast",
            de: "Delta Explosion",
            es: "Explosión delta",
            it: "Delta Blast",
            pt: "Delta Blast",
          },
          effect: {
            en: "Discard a Metal Energy card attached to Salamence.",
            ja: "サラメンスに取り付けられた金属エネルギーカードを捨てます。",
            fr: "Jeter une carte d'énergie métallique attachée à la salamence.",
            de: "Verwerfen Sie eine Metall -Energiekarte, die am Salamence angebracht ist.",
            es: "Deseche una tarjeta de energía de metal unida a la salamencia.",
            it: "Scartare una carta di energia metallica attaccata alla salamence.",
            pt: "Descarte um cartão de energia de metal ligado à salameência.",
          },
          damage: 100,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
