import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [935],
	set: Set,

	name: {
		fr: "Charbambin",
		en: "Charcadet",
		es: "Charcadet",
		it: "Charcadet",
		pt: "Charcadet",
		de: "Knarbon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Koud'Pied",
			en: "Kick",
			es: "Patada",
			it: "Calcio",
			pt: "Chute",
			de: "Tritt"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715512,
				tcgplayer: 497449,
				cardtrader: 248627
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715512,
				tcgplayer: 497449,
				cardtrader: 248627
			}
		},
	],

	illustrator: "takuyoa",

	description: {
		en: "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
	},
}

export default card
