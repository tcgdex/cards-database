import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Coalossal",
		fr: "Monthracite"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [839],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Carkol",
		fr: "Wagomine"
	},

	description: {
		en: "It's gentle usually but fearsome when angered.\nWith a body that burns at over 2,700 degrees\nFahrenheit, it crushes foes and turns them to ash."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Coal Drop",
			fr: "Jet-Charbon"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Fighting"],

		effect: {
			en: "If your opponent's Active Pokémon is a {G} Pokémon, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon {G}, cette attaque inflige 50 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,

	boosters: ["mega-gyarados"]
}

export default card