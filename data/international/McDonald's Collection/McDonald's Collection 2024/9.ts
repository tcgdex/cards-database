import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Umbreon",
		'fr-fr': "Noctali",
		'es-es': "Umbreon",
		'it-it': "Umbreon",
		'pt-br': "Umbreon",
		'de-de': "Nachtara"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [197],

	hp: 110,

	types: ["Darkness"],

	stage: "Stage1",

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				'en-us': "Blindside",
			},
			effect: {
				'en-us': "This attack does 60 damage to 1 of your opponent's Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				'en-us': "Moon Mirage",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused."
			},
			damage: 80,
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802831,
				tcgplayer: 614378
			}
		}
	]
}

export default card

