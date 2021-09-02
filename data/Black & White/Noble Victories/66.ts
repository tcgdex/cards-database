import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Archen",
		fr: "Arkéapti",
		es: "Archen",
		it: "Archen",
		pt: "Archen",
		de: "Flapteryx"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		566,
	],
	hp: 80,
	types: [
		"Fighting",
	],

	stage: "RESTORED",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Acrobatics",
				fr: "Acrobatie",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
