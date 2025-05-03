import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [301],
	set: Set,

	name: {
		en: "Delcatty"
	},

	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Skitty",
	},

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Scratch"
		},
		damage: 30
	}, {
		cost: [
			"Colorless",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Ultra Energy Source"
		},
		effect: {
			en: "Does 10 damage times the number of basic Energy cards attached to all of the Active Pokémon (both yours and your opponent’s)."
		},
		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	retreat: 1,

}

export default card
