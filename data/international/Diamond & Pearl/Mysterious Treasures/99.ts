import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'de-de': "Bummelz"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		287,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Drowsy",
				'fr-fr': "Ensommeillé",
				'de-de': "Schlaftrunken"
			},
			effect: {
				'en-us': "Both Slakoth and the Defending Pokémon are now Asleep.",
				'fr-fr': "Parecool et le Pokémon Défenseur sont maintenant Endormis.",
				'de-de': "Bummelz und das Verteidigende Pokémon schlafen jetzt."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It spends nearly all its time in a day sprawled out. Just seeing it makes one drowsy.",
		'fr-fr': "Il passe le plus clair de son temps affalé. Rien qu'à le voir, on a envie de bâiller."
	},

	thirdParty: {
		cardmarket: 277728,
		tcgplayer: 89298
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
