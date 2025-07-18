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
            en: "As long as Armaldo is your Active PokÃ©mon, each player can't play any Supporter cards.",
            ja: "ArmaldoがアクティブなPokã©Monである限り、各プレイヤーはサポーターカードをプレイできません。",
            fr: "Tant qu'Armaldo est votre poké actif, chaque joueur ne peut jouer aucune cartes supporters.",
            de: "Solange Armaldo Ihr aktiver Pokémon ist, kann jeder Spieler keine Unterstützerkarten spielen.",
            es: "Mientras Armaldo sea tu Poké Mon activo, cada jugador no puede jugar ninguna carta de seguidores.",
            it: "Finché Armaldo è il tuo poké attivo, ogni giocatore non può giocare alcuna scheda di sostenitori.",
            pt: "Enquanto o Armaldo for o seu Poké Mon ativo, cada jogador não pode jogar nenhuma cartas de apoiadores.",
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
