import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [824],
	set: Set,

	name: {
		'fr-fr': "Larvadar",
		'en-us': "Blipbug",
		'es-es': "Blipbug",
		'it-it': "Blipbug",
		'pt-br': "Blipbug",
		'de-de': "Sensect"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			'fr-fr': "Ronge",
			'en-us': "Gnaw",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "Often found in gardens, this Pokémon has hairs on its body that it uses to assess its surroundings."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539423,
				tcgplayer: 232351
			}
		},
	],
}

export default card
