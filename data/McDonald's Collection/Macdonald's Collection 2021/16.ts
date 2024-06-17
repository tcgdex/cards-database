import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2021'

const card: Card = {
	dexId: [813],
	name: {
		en: "Scorbunny",
		fr: "Flambino",
	},

	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	set: Set,
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
				en: "Super Singe",
				fr: "Super Roussi",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "A warm-up of running around gets fire energy coursing through this Pokémon’s body. Once that happens, it’s ready to fight at full power."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
