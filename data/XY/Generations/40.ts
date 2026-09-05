import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Machop",
		fr: "Machoc",
		de: "Machollo"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [74],

	dexId: [
		66,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Knuckle Punch",
				fr: "Coud'Phalange",
				de: "Knöchelhieb"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It hefts a Graveler repeatedly to strengthen its entire body. It uses every type of martial arts.",
		de: "Es hebt Georok hoch, um seinen Körper zu trainieren. Außerdem übt es sich in jeder Art von Kampfsport."
	},

	thirdParty: {
		cardmarket: 288478,
		tcgplayer: 113698
	}
}

export default card
