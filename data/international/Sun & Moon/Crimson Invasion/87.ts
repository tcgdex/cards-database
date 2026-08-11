import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Bunnelby",
		fr: "Sapereau",
		es: "Bunnelby",
		it: "Bunnelby",
		pt: "Bunnelby",
		de: "Scoppel"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		659,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud Shot",
				fr: "Tir de Boue",
				es: "Disparo Lodo",
				it: "Colpodifango",
				pt: "Tiro de Lama",
				de: "Lehmschuss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "They use their large ears to dig burrows. They will dig the whole night through.",
	},

	thirdParty: {
		cardmarket: 311934,
		tcgplayer: 149112
	}
}

export default card
