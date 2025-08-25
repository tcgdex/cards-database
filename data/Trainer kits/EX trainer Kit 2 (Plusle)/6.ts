import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [311],
	set: Set,

	name: {
		en: "Plusle"
	},

	illustrator: "Katsura Tabata",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 60,

	types: [
		"Lightning",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Pickup Power"
		},
		effect: {
			en: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand."
		}
	}, {
		cost: [
			"Lightning",
			"Colorless"
		],
		name: {
			en: "Rear Spark"
		},
		effect: {
			en: "Does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		},
		damage: 10,
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 88166
	}
}

export default card
