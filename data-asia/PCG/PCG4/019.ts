import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Entei Star",
         ja: "Entei Star",
         fr: "Star de l'Entei",
         de: "Entei Star",
         es: "ENTEI STAR",
         it: "Entei Star",
         pt: "Estrela Entei",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [244],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Burning Turn",
            ja: "燃えるターン",
            fr: "Virage brûlant",
            de: "Brennen",
            es: "Giro ardiente",
            it: "Svolta ardente",
            pt: "Curva ardente",
          },
          effect: {
            en: "Switch Entei {{Star|this Pokemon}} with 1 of your Benched Pokemon.",
            ja: "Switch Entei {{Star | This Pokemon}} 1つのベンチポケモンを備えています。",
            fr: "Switch Entei {{Star | Ce pokemon}} avec 1 de votre pokemon banc.",
            de: "Switch entei {{stern | this pokemon}} mit 1 deiner Bank -Pokemon.",
            es: "Cambie deii {{Star | This Pokemon}} con 1 de su pokemon de banca.",
            it: "Switch entei {{star | this Pokemon}} con 1 del tuo Pokemon in panchina.",
            pt: "Switch Entei {{Star | this Pokemon}} com 1 do seu Pokemon em banco.",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Detonation",
            ja: "爆発",
            fr: "Détonation",
            de: "Detonation",
            es: "Detonación",
            it: "Detonazione",
            pt: "Detonação",
          },
          effect: {
            en: "If you have less Prize cards left than your opponent, discard the top 10 cards from your deck.",
            ja: "対戦相手よりも賞品が少ない場合は、デッキからトップ10のカードを捨ててください。",
            fr: "S'il vous reste moins de cartes de prix que votre adversaire, jetez les 10 meilleures cartes de votre deck.",
            de: "Wenn Sie weniger Preiskarten übrig haben als Ihr Gegner, verwerfen Sie die Top 10 -Karten von Ihrem Deck.",
            es: "Si te quedan menos cartas de premios que tu oponente, deseche las 10 cartas principales de tu mazo.",
            it: "Se hai meno carte premiate rispetto al tuo avversario, scartare le prime 10 carte dal tuo mazzo.",
            pt: "Se você tiver menos cartas de prêmios que o seu oponente, descarte as 10 principais cartas do seu baralho.",
          },
          damage: 70,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
