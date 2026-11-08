import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [632],
	set: Set,

	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'it-it': "Durant",
		'pt-br': "Durant",
		'de-de': "Fermicula"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'es-es': "Agarre",
			'it-it': "Presa",
			'pt-br': "Agarramento Compressor",
			'de-de': "Klammer"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'en-us': "Devour",
			'fr-fr': "Voracité",
			'es-es': "Devorar",
			'it-it': "Divoratore",
			'pt-br': "Devorar",
			'de-de': "Verschlinger"
		},

		effect: {
			'en-us': "For each of your Durant in play, discard the top card of your opponent's deck.",
			'fr-fr': "Pour chacun de vos Fermite en jeu, défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Por cada uno de tus Durant en juego, descarta la primera carta de la baraja de tu rival.",
			'it-it': "Per ogni tuo Durant in gioco, scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Para cada um dos seus Durant em jogo, descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege für jedes deiner Fermicula im Spiel die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544946,
				tcgplayer: 234061
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544946,
				tcgplayer: 234061
			}
		},
	],
}

export default card
