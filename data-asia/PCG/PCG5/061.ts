import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Dunsparce",
         ja: "ダンズパース",
         fr: "Dunsparce",
         de: "Schwachsinn",
         es: "Dunsparce",
         it: "Dunsparce",
         pt: "Dunsparce",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [206],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Deadlock",
            ja: "デッドロック",
            fr: "Impasse",
            de: "Deadlock",
            es: "Punto muerto",
            it: "SCHEGGIO",
            pt: "Impasse",
          },
          effect: {
            en: "As long as Dunsparce is your Active PokÃ©mon, your opponent's Dunsparce can't attack.",
            ja: "DunsparceがあなたのアクティブなPokã©Monである限り、あなたの相手のDunspheceは攻撃できません。",
            fr: "Tant que Dunsparce est votre poké actif, le Dunsparce de votre adversaire ne peut pas attaquer.",
            de: "Solange Dunsparce Ihr aktiver Poké Mon Mon ist, kann der Dunsparce Ihres Gegners nicht angreifen.",
            es: "Mientras Dunsparce sea tu Poké Mon activo, el Dunsparce de tu oponente no puede atacar.",
            it: "Finché Dunsparce è il tuo poké attivo, Dunsparce del tuo avversario non può attaccare.",
            pt: "Enquanto o Dunsparce for o seu Poké Mon ativo, o Dunsparce do seu oponente não pode atacar.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Down Draw",
            ja: "ダウンドロー",
            fr: "Tirage vers le bas",
            de: "Down Draw",
            es: "Dibujo hacia abajo",
            it: "Abbatti",
            pt: "Draw Down Draw",
          },
          effect: {
            en: "Draw 2 cards from the bottom of your deck.",
            ja: "デッキの底から2枚のカードを描きます。",
            fr: "Dessinez 2 cartes du bas de votre deck.",
            de: "Zeichnen Sie 2 Karten von unten Ihres Decks.",
            es: "Dibuja 2 cartas desde la parte inferior de tu mazo.",
            it: "Disegna 2 carte dal fondo del tuo mazzo.",
            pt: "Desenhe 2 cartas do fundo do seu baralho.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Tripping Turn",
            ja: "トリッピングターン",
            fr: "Tour de trébu",
            de: "Stolperwechsel",
            es: "Giro de disparo",
            it: "Inciampare",
            pt: "Turning Turping",
          },
          effect: {
            en: "The Defending Pokemon is now Confused. You may switch Dunsparce with 1 of your Benched Pokemon.",
            ja: "防御ポケモンは今混乱しています。 Dunspemonをベンチしたポケモンと一緒に切り替えることができます。",
            fr: "Le Pokémon en défense est maintenant confus. Vous pouvez changer de Dunsparce avec 1 de votre Pokémon banc.",
            de: "Das verteidigende Pokemon ist jetzt verwirrt. Sie können den Dunsparce mit 1 Ihres Bankpokémons wechseln.",
            es: "El Pokémon defensor ahora está confundido. Puede cambiar Dunsparce con 1 de su Pokémon de banca.",
            it: "Il Pokemon in carica è ora confuso. Puoi cambiare Dunsparce con 1 del tuo Pokemon in panchina.",
            pt: "O Pokemon atual agora está confuso. Você pode trocar de dunsparce com 1 do seu Pokémon em banco.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
