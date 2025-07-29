import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Litwick",
		fr: "Funécire",
		es: "Litwick",
		it: "Litwick",
		pt: "Litwick",
		de: "Lichtel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		607,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Singe",
				fr: "Roussi",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Live Coal",
				fr: "Charbon Mutant",
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

	retreat: 1,

	thirdParty: {
		cardmarket: 280892
	}
}

export default card
