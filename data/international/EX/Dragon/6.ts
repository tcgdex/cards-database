import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Grumpig",
		'fr-fr': "Groret",
		'de-de': "Groink"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [326],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Spoink",
		'fr-fr': "Spoink"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Boom",
				'fr-fr': "Psycho-boom",
				'de-de': "Psychic Boom"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				'de-de': "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Trip",
				'fr-fr': "Avoir l'esprit ailleurs",
				'de-de': "Mind Trip"
			},
			effect: {
				'en-us': "If Grumpig and the Defending Pokémon have the same amount of Energy attached to them, the Defending Pokémon is now Confused.",
				'fr-fr': "Si Groret et le Pokémon Défenseur possèdent le même total en Énergie, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "If grumpig and the Defending Pokémon have the same number off Energy attached to them, the Defending Pokémon is now Confused."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85964,
				cardmarket: 275883
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85964,
				cardmarket: 275883
			},
		},
	],

}

export default card
