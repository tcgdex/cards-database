import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Kabuto",
		fr: "Kabuto",
		es: "Kabuto",
		it: "Kabuto",
		pt: "Kabuto",
		de: "Kabuto"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		140,
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
				en: "Mud Shot",
				fr: "Tir de Boue",
				es: "Disparo Lodo",
				it: "Colpodifango",
				pt: "Água Viscosa",
				de: "Lehmschuss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	evolveFrom: {
		en: "Dome Fossil Kabuto"
	}
}

export default card
