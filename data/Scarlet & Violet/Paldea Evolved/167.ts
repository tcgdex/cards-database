import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [924],
	set: Set,

	name: {
		fr: "Compagnol",
		en: "Tandemaus",
		es: "Tandemaus",
		it: "Tandemaus",
		pt: "Tandemaus",
		de: "Zwieps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Accrochage",
			en: "Attach",
			es: "Pegarse",
			it: "Appiccicoso",
			pt: "Conectar",
			de: "Festkleben"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Coud'Pattes",
			en: "Smash Kick",
			es: "Patada Destrucción",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso",
			de: "Schmetterkick"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715642,
				tcgplayer: 497587,
				cardtrader: 248823
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715642,
				tcgplayer: 497587,
				cardtrader: 248823
			}
		},
	],

	illustrator: "Sekio",

	description: {
		en: "Exhibiting great teamwork, they use their incisors to cut pieces out of any material that might be useful for a nest, then make off with them.",
	},
}

export default card
