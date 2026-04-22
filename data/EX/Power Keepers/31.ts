import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia"
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
		en: "Ralts",
		fr: "Tarsal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hypnosis",
				fr: "Hypnose",
				de: "Hypnose"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Dream Eater",
				fr: "Dévorêve",
				de: "Traumfresser"
			},
			effect: {
				en: "If the Defending Pokémon is not Asleep, this attack does nothing.",
				fr: "Si le Pokémon Défenseur n'est pas Endormi, cette attaque est sans effet.",
				de: "Du kannst diesen Angriff nur dann einsetzen, wenn das Verteidigende Pokémon schläft."
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

