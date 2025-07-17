import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Graveler",
         ja: "ブロックの砂利",
         fr: "Graveler de Brock",
         de: "Brocks Schotter",
         es: "Graveler de Brock",
         it: "Graveler di Brock",
         pt: "Graveler de Brock",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [75],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting", "Fighting"],
          name: {
            en: "Detonate",
            ja: "爆発します",
            fr: "Exploser",
            de: "Detonieren",
            es: "Detonar",
            it: "Detonare",
            pt: "Detonar",
          },
          effect: {
            en: "Does 10 damage to each Pokemon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokemon.) Brock's Graveler does 50 damage to itself. If there is a Stadium card in play, discard it.",
            ja: "各プレイヤーのベンチで各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）ブロックの砂利機はそれ自体に50のダメージを与えます。スタジアムカードが再生されている場合は、捨ててください。",
            fr: "Fait 10 dégâts à chaque pokemon sur le banc de chaque joueur. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Le graveleur de Brock se fait 50 dégâts. S'il y a une carte de stade en jeu, jetez-la.",
            de: "Schädigt jedes Pokémon auf der Bank jedes Spielers. (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Brocks Schotter schädigt sich 50. Wenn es eine Stadionkarte im Spiel gibt, entsorgen Sie sie.",
            es: "Hace 10 daños a cada Pokémon en el banco de cada jugador. (No aplique debilidad y resistencia para los Pokémon de banca). El grava de Brock hace 50 daños a sí mismo. Si hay una carta del estadio en juego, descarte.",
            it: "Fa 10 danni a ogni Pokemon sulla panchina di ogni giocatore. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) La ghiaia di Brock fa 50 danni a se stesso. Se c'è una carta da stadio in gioco, scartalo.",
            pt: "10 danos a cada Pokémon no banco de cada jogador. (Não aplique fraqueza e resistência ao Pokémon em banco.) O Graveler de Brock causa 50 danos a si mesmo. Se houver uma carta de estádio em jogo, descarte -a.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
