import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		fr: "Magnéti",
		en: "Magnemite",
		es: "Magnemite",
		it: "Magnemite",
		pt: "Magnemite",
		de: "Magnetilo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Collision",
			en: "Ram",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Balle Rapide",
			en: "Speed Ball",
			es: "Bola Rápida",
			it: "Velocipalla",
			pt: "Bola Veloz",
			de: "Geschwindigkeitsball"
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

	description: {
		en: "The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725143,
				tcgplayer: 509823,
				cardtrader: 255623
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725143,
				tcgplayer: 509823,
				cardtrader: 255623
			}
		},
	],

	illustrator: "Masakazu Fukuda",

	
}

export default card
