import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hypotrempe",
		en: "Horsea",
		es: "Horsea",
		it: "Horsea",
		pt: "Horsea",
		de: "Seeper"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Pistolet à O",
			en: "Water Gun",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d’Água",
			de: "Aquaknarre"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	regulationMark: "E",
	retreat: 0,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
