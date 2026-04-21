import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [325],
	set: Set,

	name: {
		en: "Spoink",
		fr: "Spoink"
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
			en: "Knock Away",
			fr: "Asticotage"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
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
