import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [116],
	set: Set,

	name: {
		fr: "Hypotrempe",
		en: "Horsea",
		es: "Horsea",
		it: "Horsea",
		pt: "Horsea",
		de: "Seeper"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Pluie Éclaboussante",
			en: "Rain Splash",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			de: "Regenplatscher"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Aileron Aiguisé",
			en: "Sharp Fin",
			es: "Cortaleta",
			it: "Pinnaffilata",
			pt: "Barbatana Afiada",
			de: "Schneidige Flosse"
		},

		damage: 40
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
		en: "They swim with dance-like motions and cause whirlpools to form. Horsea compete to see which of them can generate the biggest whirlpool.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733711,
				tcgplayer: 516583,
				cardtrader: 261123
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733711,
				tcgplayer: 516583,
				cardtrader: 261123
			}
		},
	],

	illustrator: "aspara",

	
}

export default card
