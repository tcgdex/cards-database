import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		en: "Vulpix",
		fr: "Goupix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			es: "Carbón Activado",
			it: "Carboni Ardenti",
			pt: "Carvão Vivo",
			de: "Glühende Kohlen"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		en: "As its body grows larger, its six warm tails become more beautiful, with a more luxurious coat of fur.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769200,
				tcgplayer: 550070
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769200,
				tcgplayer: 550070
			}
		},
	],

	illustrator: "sowsow",

}

export default card