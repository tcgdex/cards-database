import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [505],
	set: Set,

	name: {
		'en-us': "Watchog",
		'fr-fr': "Miradar",
		'es-es': "Watchog",
		'it-it': "Watchog",
		'pt-br': "Watchog",
		'de-de': "Kukmarda"
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
		'es-es': "Patrat",
		'it-it': "Patrat",
		'pt-br': "Patrat",
		'de-de': "Nagelotz"
	},

	stage: "Stage1",

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Confuse Ray",
			'fr-fr': "Onde Folie"
		},
		effect: {
			'en-us': "The Defending Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Défenseur est maintenant Confus."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Hyper Fang",
			'fr-fr': "Croc de Mort"
		},
		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		},
		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		'en-us': "They make the patterns on their bodies shine in order to threaten predators. Keen eyesight lets them see in the dark."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280066,
				tcgplayer: 98705
			}
		},
	],

}

export default card
