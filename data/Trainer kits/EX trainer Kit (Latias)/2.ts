import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [256],
	set: Set,

	name: {
		en: "Combusken",
		fr: "Galifeu"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu"
	},

	attacks: [{
		cost: [
			"Fire",
		],
		name: {
			en: "Flare",
			fr: "Intimidation"
		},
		damage: 20
	}, {
		cost: [
			"Colorless",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Double Kick",
			fr: "Double pied"
		},
		effect: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez deux pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de face."
		},
		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 84403
	}
}

export default card
