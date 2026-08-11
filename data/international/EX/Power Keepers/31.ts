import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		281,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hypnosis",
				'fr-fr': "Hypnose",
				'de-de': "Hypnose"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Dream Eater",
				'fr-fr': "Dévorêve",
				'de-de': "Traumfresser"
			},
			effect: {
				'en-us': "If the Defending Pokémon is not Asleep, this attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur n'est pas Endormi, cette attaque est sans effet.",
				'de-de': "Du kannst diesen Angriff nur dann einsetzen, wenn das Verteidigende Pokémon schläft."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277337,
		tcgplayer: 86465
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

