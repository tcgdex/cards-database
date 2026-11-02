import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Cascoon",
		fr: "Blindalys"
	},

	illustrator: "GOSSAN",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [268],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte"
	},

	description: {
		en: "It never forgets any attack it endured while in the\ncocoon. After evolution, it seeks payback."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Harden",
			fr: "Armure"
		},

		cost: ["Grass"],

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 40 or less.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques si ces dégâts sont inférieurs ou égaux à 40."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-blaziken"]
}

export default card