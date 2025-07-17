import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Armaldo",
         ja: "アルマルド",
         fr: "Armaldo",
         de: "Armaldo",
         es: "Armaldo",
         it: "Armaldo",
         pt: "Armaldo",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [348],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Primal Veil",
            ja: "原始ベール",
            fr: "Voile primitif",
            de: "Urschleier",
            es: "Velo primario",
            it: "Velo primordiale",
            pt: "Véu primal",
          },
          effect: {
            en: "As long as Armaldo is your Active Pokémon, each player can't play any Supporter cards.",
            ja: "Armaldoがアクティブなポケモンである限り、各プレイヤーはサポーターカードをプレイできません。",
            fr: "Tant qu'Armaldo est votre Pokémon actif, chaque joueur ne peut jouer aucune cartes supporters.",
            de: "Solange Armaldo Ihr aktives Pokémon ist, kann jeder Spieler keine Unterstützerkarten spielen.",
            es: "Mientras Armaldo sea tu Pokémon activo, cada jugador no puede jugar ninguna carta de defensa.",
            it: "Finché Armaldo è il tuo Pokémon attivo, ogni giocatore non può giocare a carte di sostegno.",
            pt: "Enquanto o Armaldo for seu Pokémon ativo, cada jogador não pode jogar cartas de apoiadores.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Blade Arms",
            ja: "ブレードアーム",
            fr: "Armes à lame",
            de: "Klingenarme",
            es: "Brazos de cuchilla",
            it: "Braccia lama",
            pt: "Braços da lâmina",
          },
          damage: 60,
        },
      ],

      retreat: 3,

};
