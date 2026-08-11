import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [193],
	set: Set,

	name: {
		en: "Yanma",
		fr: "Yanma",
		es: "Yanma",
		it: "Yanma",
		pt: "Yanma",
		de: "Yanma"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide",
			es: "Picado Rápido",
			it: "Immersione Rapida",
			pt: "Mergulho Veloz",
			de: "Tempohechtsprung"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		en: "Its frail wings are so thin that one can see clear through them. However, during flight these wings exhibit the power to churn air with force enough to launch a house skyward.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658494,
				tcgplayer: 272206
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658494,
				tcgplayer: 272206
			}
		},
	],
}

export default card
