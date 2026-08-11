import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Litleo",
		fr: "Hélionceau",
		es: "Litleo",
		it: "Litleo",
		pt: "Litleo",
		de: "Leufeo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "Misa Tsutsui",

	attacks: [{
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			es: "Carbón Activado",
			it: "Carboni Ardenti",
			pt: "Live Coal",
			de: "Glühende Kohlen"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "This hot-blooded Pokémon is filled with curiosity. When it gets angry or starts fighting, its short mane gets hot."
	},

	dexId: [667],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574046,
				tcgplayer: 246838
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574046,
				tcgplayer: 246838
			}
		},
	],
}

export default card
