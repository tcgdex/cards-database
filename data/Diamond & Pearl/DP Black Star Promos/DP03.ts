import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Tiplouf"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	description: {
		fr: "Il est fier et déteste accepter la nourriture qu'on lui offre. Son pelage épais le protège du froid."
	},

	attacks: [{
		name: {
			fr: "Picpic"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			fr: "Éclaboussure"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires."
		},

		damage: "20+"
	}]
}

export default card
