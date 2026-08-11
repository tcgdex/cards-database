import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Surfing Pikachu V",
		'fr-fr': "Pikachu Surfeur V",
		'es-es': "Pikachu Surf V",
		'it-it': "Pikachu Surf V",
		'pt-br': "Pikachu Surfista V",
		'de-de': "Surfendes Pikachu V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "aky CG Works",

	attacks: [{
		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'pt-br': "Surfar",
			'de-de': "Surfer"
		},

		damage: 150,
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	suffix: "V",
	dexId: [25],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576753,
				tcgplayer: 250306
			}
		},
	],
}

export default card
