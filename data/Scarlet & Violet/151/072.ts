import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [72],
	set: Set,

	name: {
		fr: "Tentacool",
		en: "Tentacool",
		es: "Tentacool",
		it: "Tentacool",
		pt: "Tentacool",
		de: "Tentacha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Picotement",
			en: "Tingle",
			es: "Hormigueo",
			it: "Formicolio",
			pt: "Formigamento",
			de: "Kribbeln"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Arrosage",
			en: "Watering",
			es: "Riego",
			it: "Innaffiare",
			pt: "Irrigação",
			de: "Gießen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "This Pokémon is mostly made of water. A Tentacool out in the ocean is very hard to spot, because its body blends in with the sea.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733667,
				tcgplayer: 516565,
				cardtrader: 261154
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733667,
				tcgplayer: 516565,
				cardtrader: 261154
			}
		},
	],

	illustrator: "miki kudo",

	
}

export default card
