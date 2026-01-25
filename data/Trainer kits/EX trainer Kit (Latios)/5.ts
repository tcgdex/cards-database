import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		en: "Magneton",
		fr: "Magneton"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti"
	},

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Ram",
			fr: "Collision"
		},
		damage: 20
	}, {
		cost: [
			"Lightning",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Triple Smash",
			fr: "Triple éclate"
		},
		effect: {
			en: "Flip 3 coins. This attack does 20 damage plus 20 more damage for each heads.",
			fr: "Lancez trois pièces. Cette attaque inflige 20 dégâts plus 20 dégâts multipliés par le nombre de faces."
		},
		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 87103
	}
}

export default card
