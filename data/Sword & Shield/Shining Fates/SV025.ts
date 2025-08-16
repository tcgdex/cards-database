import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [816],
	set: Set,

	name: {
		fr: "Larméléon",
		en: "Sobble",
		es: "Sobble",
		it: "Sobble",
		pt: "Sobble",
		de: "Memmeon"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Pistolet à O",
			en: "Water Gun",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			de: "Aquaknarre"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won't be able to resist weeping."
	},

	thirdParty: {
		cardmarket: 539513
	}
}

export default card
