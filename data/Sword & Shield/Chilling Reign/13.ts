import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [761],
	set: Set,

	name: {
		en: "Bounsweet",
		fr: "Croquine",
		es: "Bounsweet",
		it: "Bounsweet",
		pt: "Bounsweet",
		de: "Frubberl"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Splash",
			fr: "Trempette",
			es: "Salpicadura",
			it: "Splash",
			pt: "Borrifada",
			de: "Platscher"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "When under attack, it secretes a sweet and delicious sweat. The scent only calls more enemies to it."
	}
}

export default card