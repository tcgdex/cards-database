import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Surfing Pikachu V",
		fr: "Pikachu Surfeur V",
		es: "Pikachu Surf V",
		it: "Pikachu Surf V",
		pt: "Pikachu Surfista V",
		de: "Surfendes Pikachu V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "aky CG Works",

	attacks: [{
		name: {
			en: "Surf",
			fr: "Surf",
			es: "Surf",
			it: "Surf",
			pt: "Surfar",
			de: "Surfer"
		},

		damage: 150,
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	suffix: "V",
	dexId: [25]
}

export default card
