import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

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
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Poing Léger",
			en: "Light Punch",
			es: "Puño Ligero",
			it: "Pugnetto",
			pt: "Soco de Luz",
			de: "Leichter Hieb"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			fr: "Fournaise",
			en: "Combustion",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			de: "Glühen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725123,
				tcgplayer: 509755,
				cardtrader: 255603
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725123,
				tcgplayer: 509755,
				cardtrader: 255603
			}
		},
	],

	illustrator: "Saya Tsuruta",

	
}

export default card
