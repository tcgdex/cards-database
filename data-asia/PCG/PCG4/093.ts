import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Tyranitar ex",
         ja: "ティラニターエクス",
         fr: "Tyranitar ex",
         de: "Tyranitar ex",
         es: "Tyranitar ex",
         it: "Tyranitar Ex",
         pt: "Tyranitar Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [248],
      hp: 160,
      types: ["Darkness"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Shatter",
            ja: "粉砕",
            fr: "Briser",
            de: "Zerschmettern",
            es: "Romper",
            it: "Frantuma",
            pt: "Quebrar",
          },
          effect: {
            en: "Discard any Stadium card in play.",
            ja: "プレイ中のスタジアムカードを捨ててください。",
            fr: "Jeter toute carte de stade en jeu.",
            de: "Verwerfen Sie jede Stadionkarte im Spiel.",
            es: "Deseche cualquier carta del estadio en juego.",
            it: "Scartare qualsiasi carta stadio in gioco.",
            pt: "Descarte qualquer carta do estádio em jogo.",
          },
          damage: 30,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Derail",
            ja: "脱線",
            fr: "Dérailler",
            de: "Entgleisen",
            es: "Hacer descarrilar",
            it: "Deragliare",
            pt: "Descarrilhar",
          },
          effect: {
            en: "Discard a Special Energy card, if any, attached to the Defending Pokemon.",
            ja: "防御ポケモンに取り付けられた特別なエネルギーカードを捨てます。",
            fr: "Jeter une carte d'énergie spéciale, le cas échéant, attaché au Pokémon en défense.",
            de: "Verwerfen Sie eine spezielle Energiekarte, falls vorhanden, an das verteidigende Pokémon angeschlossen.",
            es: "Deseche una tarjeta de energía especial, si la hay, unida al Pokémon defensor.",
            it: "Scartare una scheda energetica speciale, se presente, collegata al Pokemon in difesa.",
            pt: "Descarte um cartão de energia especial, se houver, anexado ao Pokémon atual.",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Darkness", "Colorless"],
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
        {
          cost: ["Fighting", "Darkness", "Darkness", "Colorless"],
          name: {
            en: "Losing Control",
            ja: "コントロールを失う",
            fr: "Perdre le contrôle",
            de: "Kontrolle verlieren",
            es: "PERDIDO CONTROL",
            it: "Perdere il controllo",
            pt: "Perdendo controle",
          },
          effect: {
            en: "Discard the top 3 cards of your deck.",
            ja: "デッキのトップ3カードを捨ててください。",
            fr: "Jetez les 3 meilleures cartes de votre deck.",
            de: "Verwerfen Sie die Top 3 Karten Ihres Decks.",
            es: "Deseche las 3 cartas principales de su mazo.",
            it: "Scarta le prime 3 carte del tuo mazzo.",
            pt: "Descarte as três principais cartas do seu baralho.",
          },
          damage: 120,
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
