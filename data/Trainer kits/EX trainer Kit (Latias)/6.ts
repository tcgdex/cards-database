import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [300],
	set: Set,

	name: {
		en: "Skitty",
		fr: "Skitty"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Colorless",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Tackle",
			fr: "Charge"
		},
		damage: 10
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Lunge",
			fr: "Coup rapide"
		},
		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, l'attaque est sans effet."
		},
		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 89263
	}
}

export default card
