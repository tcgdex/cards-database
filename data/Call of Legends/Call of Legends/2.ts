import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Deoxys",
		fr: "Deoxys",
		de: "Deoxys"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		386,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Cell Storm",
				fr: "Tempête cellulaire",
				de: "Zellsturm"
			},
			effect: {
				en: "Discard 2 Psychic Energy attached to Deoxys and remove 6 damage counters from Deoxys.",
				fr: "Défaussez 2 Énergies Psychic attachées à Deoxys et retirez-lui 6 marqueurs de dégâts.",
				de: "Lege 2 an Deoxys angelegte -Energien auf deinen Ablagestapel und entferne 6 Schadensmarken von Deoxys."
			},
			damage: 60,

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
