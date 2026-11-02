import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d'Alola"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [50],
	hp: 50,
	types: ["Metal"],

	description: {
		en: "The metal-rich geology of this Pokémon's habitat\ncaused it to develop steel whiskers on its head.",
		fr: "À force d'être en contact avec des terres riches en métaux, des vibrisses en acier ont poussé sur le sommet de sa tête."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card