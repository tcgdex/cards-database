import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'de-de': "Lilminip"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		548,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Magical Leaf",
				'fr-fr': "Feuillemagik",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage and heal 10 damage from this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires et vous soignez 10 dégâts à ce Pokémon.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Since they prefer moist, nutrient-rich soil, the areas where Petilil live are known to be good for growing plants.",
	},

	thirdParty: {
		cardmarket: 279747,
		tcgplayer: 87990
	}
}

export default card
