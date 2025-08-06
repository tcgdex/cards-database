import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [325],
	set: Set,

	name: {
		en: "Spoink"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Psychic",
	],

	attacks: [{
		cost: [
			"Psychic",
		],
		name: {
			en: "Knock Away"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
		},
		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 89475
	}
}

export default card
