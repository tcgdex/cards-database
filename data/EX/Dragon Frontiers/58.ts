import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
		de: "Pupitar"
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		247,
	],
	hp: 70,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Larvitar",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
