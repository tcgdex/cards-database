import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Omastar",
         ja: "Omastar",
         fr: "Omastar",
         de: "Omastar",
         es: "OmaStar",
         it: "Omastar",
         pt: "OMASTAR",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [139],
      hp: 90,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Primal Stare",
            ja: "原始凝視",
            fr: "Regard primordial",
            de: "Urstarren",
            es: "Mirada primaria",
            it: "Lo sguardo primordiale",
            pt: "Stare Primal",
          },
          effect: {
            en: "As long as Omastar is your Active Pokmon, your opponent can't play Basic Pokmon or Evolution cards from his or her hand to evolve his or her Active Pokmon.",
            ja: "Omastarがアクティブなポケモンである限り、あなたの対戦相手は、アクティブなポクモンを進化させるために、手から進化カードのために基本的なポケモンをプレイすることができません。",
            fr: "Tant qu'Omastar est votre Pokémon actif, votre adversaire ne peut pas jouer au Pokémon de base pour les cartes d'évolution de sa main pour faire évoluer son pokmon actif.",
            de: "Solange Omastar Ihr aktives Pokémon ist, kann Ihr Gegner kein Basic -Pokémon für Evolutionskarten von seiner Hand spielen, um sein aktives Pokmon zu entwickeln.",
            es: "Mientras OmaStar sea tu Pokémon activo, tu oponente no puede jugar Pokémon básico para las cartas de evolución de su mano para evolucionar su Pokmon activo.",
            it: "Finché Omastar è il tuo Pokemon attivo, il tuo avversario non può giocare a Pokemon di base per le carte di evoluzione dalla sua mano per evolvere i suoi Pokmon attivi.",
            pt: "Enquanto o OMASTAR for seu Pokémon ativo, seu oponente não poderá jogar Pokemon básico para cartas de evolução de sua mão para evoluir seu Pokmon ativo.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Spook",
            ja: "恐怖",
            fr: "Effrayer",
            de: "Spuk",
            es: "Espectro",
            it: "Spook",
            pt: "Assustado",
          },
          effect: {
            en: "The Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Das verteidigende Pokemon kann sich während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "El Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "O Pokémon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

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
