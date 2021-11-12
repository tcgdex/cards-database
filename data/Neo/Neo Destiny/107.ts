import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Charizard",
		fr: "Dracaufeu brillant"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 100,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "White-Hot Flame",
				fr: "Flammes blanches"
			},
			effect: {
				en: "Discard 1 Energy card and 1 Energy card attached to Shining Charizard or this attack does nothing. Flip a coin. If tails, Shining Charizard does 30 damage to itself.",
				fr: "Défaussez-vous d'une carte Énergie  et d'une carte Énergie  attachées à Dracaufeu brillant ou cette attaque ne fait rien. Lancez une pièce. Si c'est pile, Dracaufeu brillant s'inflige 30 dégâts."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Les flammes qu'il souffle sont si chaudes qu'elles peuvent faire fondre n'importe quoi."
	}
}

export default card
