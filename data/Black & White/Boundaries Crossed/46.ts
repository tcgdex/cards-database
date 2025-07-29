import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
		es: "Cryogonal",
		it: "Cryogonal",
		pt: "Cryogonal",
		de: "Frigometri"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Edge",
				fr: "Lame de Givre",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
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

	retreat: 1,

	thirdParty: {
		cardmarket: 280633
	}
}

export default card
