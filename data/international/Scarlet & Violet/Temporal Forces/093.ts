import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [837],
	set: Set,

	name: {
		en: "Rolycoly",
		fr: "Charbi",
		es: "Rolycoly",
		it: "Rolycoly",
		pt: "Rolycoly",
		de: "Klonkett"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			de: "Rolltackle"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
			es: "Joya de Luz",
			it: "Gemmoforza",
			pt: "Gema Poderosa",
			de: "Juwelenkraft"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		en: "On sunny days, Rolycoly will come out onto grassy plains and roll around. Then it will eat the grass that gets tangled in its wheel-like leg.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760723,
				tcgplayer: 542837
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760723,
				tcgplayer: 542837
			}
		},
	],

	illustrator: "Aya Kusube",

}

export default card