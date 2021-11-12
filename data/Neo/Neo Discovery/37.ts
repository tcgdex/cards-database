import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Corsola",
		fr: "Corayon"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		222,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Recover",
				fr: "Soin"
			},
			effect: {
				en: "Discard 1 Energy attached to Corsola or this attack does nothing. Remove all damage counters from Corsola.",
				fr: "Défaussez 1 carte Énergie  attachée à Corayon pour pouvoir utiliser cette attaque. Retirez tous les marqueurs de dégâts sur Corayon."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],

			name: {
				en: "Spike Cannon",
				fr: "Picanon"
			},

			effect: {
				en: "Flip 2 coins. This attack does 30 times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces."
			},

			damage: "30×"
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Il ne cesse de grandir et de changer de peau. La pointe de sa tête est très recherchée à cause de sa beauté."
	}
}

export default card
