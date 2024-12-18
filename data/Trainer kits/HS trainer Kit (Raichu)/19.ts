import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		en: "Raichu"
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "If the electric pouches in its cheeks become fully charged, both ears will stand straight up."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Iron Tail"
		},

		damage: "30×",

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads."
		}
	}, {
		name: {
			en: "Thunderbolt"
		},

		damage: 100,

		effect: {
			en: "Discard all Energy attached to Raichu."
		}
	}],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	}
}

export default card