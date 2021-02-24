import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Poipole",
		fr: "Vémini",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		803,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Eye Opener",
				fr: "Ouvrir les Yeux",
			},
			effect: {
				en: "Look at your face-down Prize cards.",
				fr: "Regardez vos cartes Récompense (actuellement face cachée).",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
