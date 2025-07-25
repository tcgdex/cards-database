import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Corsola",
         ja: "コルサラ",
         fr: "Corsola",
         de: "Korsola",
         es: "Corsola",
         it: "Corsola",
         pt: "Corsola",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [222],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Coral Glow",
            ja: "サンゴの輝き",
            fr: "Lueur de corail",
            de: "Korallenglühen",
            es: "Brillo de coral",
            it: "Blow di corallo",
            pt: "Brilho de coral",
          },
          effect: {
            en: "Draw a number of cards up to the number of your opponent's Basic Pokemon in play.  (You can't have more than 10 cards in your hand in this way.)",
            ja: "相手の基本的なポケモンの数まで多くのカードを描きます。  （この方法で10枚以上のカードを手に入れることはできません。）",
            fr: "Dessinez un certain nombre de cartes jusqu'au nombre de Pokémon de base de votre adversaire en jeu.  (Vous ne pouvez pas avoir plus de 10 cartes dans votre main de cette manière.)",
            de: "Zeichnen Sie eine Reihe von Karten auf die Anzahl des grundlegenden Pokémon Ihres Gegners im Spiel.  (Sie können auf diese Weise nicht mehr als 10 Karten in der Hand haben.)",
            es: "Dibuje una serie de cartas hasta el número de Pokémon básico de tu oponente en juego.  (No puedes tener más de 10 cartas en tu mano de esta manera).",
            it: "Disegna una serie di carte fino al numero di Pokemon di base del tuo avversario in gioco.  (Non puoi avere più di 10 carte in mano in questo modo.)",
            pt: "Desenhe uma série de cartas para o número de Pokémon básicos do seu oponente em jogo.  (Você não pode ter mais de 10 cartas na sua mão dessa maneira.)",
          },
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Surf",
            ja: "サーフィン",
            fr: "Surf",
            de: "Surfen",
            es: "Navegar",
            it: "Navigare",
            pt: "Surf",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
