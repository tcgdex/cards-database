import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei"
	},
	illustrator: "Yuri Umemura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Blitz",
				fr: "Boutefeu"
			},
			effect: {
				en: "Discard all Fire Energy attached to Entei.",
				fr: "Défaussez toutes les Énergies  attachées à Entei."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
