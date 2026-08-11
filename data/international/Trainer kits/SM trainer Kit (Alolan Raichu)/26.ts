import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [777],
	set: Set,

	name: {
		'en-us': "Togedemaru",
		'fr-fr': "Togedemaru",
		'es-es': "Togedemaru",
		'it-it': "Togedemaru",
		'pt-br': "Togedemaru",
		'de-de': "Togedemaru"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: [
		"Lightning"
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Defense Curl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn."
			}
		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Discharge"
			},
			effect: {
				'en-us': "Discard all Lightning Energy from this Pokémon. This attack does 30 damage for each card you discarded in this way."
			},
			damage: "30×"
		},
	],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297251,
				tcgplayer: 152877
			}
		},
	],

}

export default card