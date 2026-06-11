import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [48],
	set: Set,

	name: {
		fr: "Mimitoss",
		en: "Venonat",
		es: "Venonat",
		it: "Venonat",
		pt: "Venonat",
		de: "Bluzuk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Ronge",
			en: "Gnaw",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			de: "Nagen"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			fr: "Rayon",
			en: "Beam",
			es: "Transmisión",
			it: "Raggio",
			pt: "Feixe",
			de: "Strahl"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "Poison oozes from all over its body. It catches small bug Pokémon at night that are attracted by light.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733643,
				tcgplayer: 516206,
				cardtrader: 261155
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733643,
				tcgplayer: 516206,
				cardtrader: 261155
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	
}

export default card
