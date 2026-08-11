import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Mandibuzz",
		'fr-fr': "Vaututrice",
		'es-es': "Mandibuzz",
		'it-it': "Mandibuzz",
		'pt-br': "Mandibuzz",
		'de-de': "Grypheldis"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		630,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Bone Rush",
				'fr-fr': "Charge-Os",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Pulse",
				'fr-fr': "Vibrobscur",
			},
			effect: {
				'en-us': "Does 10 more damage for each Darkness Energy attached to all of your Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Watching from the sky, they swoop to strike weakened Pokémon on the ground. They decorate themselves with bones.",
	},

	thirdParty: {
		cardmarket: 280034,
		tcgplayer: 87151
	}
}

export default card
