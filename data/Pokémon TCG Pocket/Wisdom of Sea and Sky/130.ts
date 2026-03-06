import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Fearow",
		fr: "Rapasdepic"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [22],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Spearow"
	},

	description: {
		en: "Carrying food through Fearow's territory is\ndangerous. It will snatch the food away from\nyou in a flash!",
		fr: "Si vous vous promenez sur le territoire d'un Rapasdepic en transportant de la nourriture, vous risquez de vite la voir s'envoler !"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Peck Bugs",
			fr: "Picore Insectes"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is a {G} Pokémon, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon {G}, cette attaque inflige 40 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card