import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [276],
	set: Set,

	name: {
		en: "Taillow",
		fr: "Nirondelle",
		es: "Taillow",
		it: "Taillow",
		pt: "Taillow",
		de: "Schwalbini"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Atsuko Nishida",

	description: {
		en: "It dislikes cold seasons. They migrate to other lands in search of warmth, flying over 180 miles a day."
	},

	attacks: [{
		name: {
			en: "Double Peck"
		},

		damage: "10×",

		effect: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 118812
	}
}

export default card