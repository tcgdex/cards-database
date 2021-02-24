import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Snubbull",
		fr: "Snubbull",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		209,
	],
	hp: 70,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Make a Mess",
				fr: "Bazar Garanti",
			},
			effect: {
				en: "Discard up to 2 Trainer cards from your hand. This attack does 20 damage for each card you discarded in this way.",
				fr: "Défaussez jusqu’à 2 cartes Dresseur de votre main. Cette attaque inflige 20 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
