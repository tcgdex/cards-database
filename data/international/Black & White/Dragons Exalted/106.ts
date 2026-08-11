import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'es-es': "Bidoof",
		'it-it': "Bidoof",
		'pt-br': "Bidoof",
		'de-de': "Bidiza"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		399,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bang Heads",
				'fr-fr': "Choc Frontal",
			},
			effect: {
				'en-us': "Both this Pokémon and the Defending Pokémon are now Confused.",
				'fr-fr': "Ce Pokémon et le Pokémon Défenseur sont maintenant Confus.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A comparison revealed that Bidoof's front teeth grow at the same rate as Rattata's.",
	},

	thirdParty: {
		cardmarket: 280545,
		tcgplayer: 83829
	}
}

export default card
