import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [969],
	set: Set,

	name: {
		fr: "Germéclat",
		en: "Glimmet",
		es: "Glimmet",
		it: "Glimmet",
		pt: "Glimmet",
		de: "Lumispross"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Jet-Pierres",
			en: "Rock Throw",
			es: "Lanzarrocas",
			it: "Sassata",
			pt: "Lançamento de Rocha",
			de: "Steinwurf"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715600,
				tcgplayer: 497540,
				cardtrader: 248772
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715600,
				tcgplayer: 497540,
				cardtrader: 248772
			}
		},
	],

	illustrator: "Sekio",

	description: {
		en: "It absorbs nutrients from cave walls. The petals it wears are made of crystallized poison.",
	},
}

export default card
