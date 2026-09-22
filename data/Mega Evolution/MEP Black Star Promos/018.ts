import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Cottonee",
	},

	illustrator: "Kariya",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [546],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
		},

		effect: {
			en: "Draw a card.",
		}
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Metal",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 859021,
				tcgplayer: 664051
			}
		},
	],
}

export default card
