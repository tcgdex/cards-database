import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sobble",
		fr: "Larméléon",
		de: "Memmeon",
		it: "Sobble",
		es: "Sobble",
		pt: "Sobble",
		'es-mx': "Sobble"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [816],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d’Água",
			de: "Aquaknarre"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886623,
				tcgplayer: 699878
			}
		},
	],
}

export default card
