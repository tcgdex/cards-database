import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Magneton",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Magnemite",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Electromagnetic Power",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may take 1 Energy card attached to 1 of your Magnemites, Magnetons, or Dark Magnetons and attach it to a different 1 of your Magnemites, Magnetons, or Dark Magnetons. This power can't be used if Magneton is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Plasma",
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, attach 1 of them to Magneton.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
