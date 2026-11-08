import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Clawitzer",
		'fr-fr': "Gamblast",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		693,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Clauncher",
		'fr-fr': "Flingouste",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mega Boost",
				'fr-fr': "Méga Boost",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Special Energy card from your hand to 1 of your Mega Evolution Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie spéciale de votre main à l'un de vos Pokémon Méga-Évolution.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-Masse",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "By expelling water from the nozzle in the back of its claw, it can move at a speed of 60 knots.",
	},

	thirdParty: {
		cardmarket: 291586
	}
}

export default card
