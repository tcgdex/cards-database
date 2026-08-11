import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Kanako Eo",
	category: "Pokemon",

	dexId: [52],

	description: {
		'en-us': "Adores round objects. It wanders the streets on a nightly basis to look for dropped loose change."
	},

	hp: 60,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Act Tough",
			'fr-fr': "Dur à Cuire"
		},

		damage: "10+",

		effect: {
			'en-us': "If this Pokémon has any Darkness Energy attached to it, this attack does 20 more damage.",
			'fr-fr': "Si de l'Énergie  est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss"
	},

	rarity: "None",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 295147,
				tcgplayer: 275067
			}
		}
	]
}

export default card

