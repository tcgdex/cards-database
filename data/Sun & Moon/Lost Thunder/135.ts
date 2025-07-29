import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		it: "Marill",
		pt: "Marill",
		de: "Marill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		183,
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
				"Colorless",
			],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
				es: "Disparo Mágico",
				it: "Magicolpo",
				pt: "Tiro Mágico",
				de: "Magischer Schuss"
			},

			damage: 30,

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

	thirdParty: {
		cardmarket: 365772
	}
}

export default card
