import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Darmanitan",
		'fr-fr': "Darumacho",
		'es-es': "Darmanitan",
		'it-it': "Darmanitan",
		'pt-br': "Darmanitan",
		'de-de': "Flampivian"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		555,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Smash",
				'fr-fr': "Éclate-Roc",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Punch",
				'fr-fr': "Poing de Feu",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its internal fire burns at 2,500º F, making enough power that it can destroy a dump truck with one punch.",
	},

	thirdParty: {
		cardmarket: 279986,
		tcgplayer: 84714
	}
}

export default card
