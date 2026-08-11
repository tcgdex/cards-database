import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [636],
	set: Set,

	name: {
		en: "Larvesta",
		fr: "Pyronille",
		es: "Larvesta",
		it: "Larvesta",
		pt: "Larvesta",
		de: "Ignivor"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			es: "Carbón Activado",
			it: "Carboni Ardenti",
			pt: "Carvão Vivo",
			de: "Glühende Kohlen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		en: "The people of ancient times believed that Larvesta fell from the sun.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691741,
				tcgplayer: 478107
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691741,
				tcgplayer: 478107
			}
		},
	],
}

export default card
