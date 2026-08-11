import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Klinklang",
		'fr-fr': "Cliticlic"
	},

	illustrator: "Akira Komayama",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [601],
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Klang"
	},

	description: {
		'en-us': "From its spikes, it launches powerful blasts of\nelectricity. Its red core contains an enormous\namount of energy.",
		'fr-fr': "Il peut envoyer de terribles décharges électriques de la pointe de ses pics. Il accumule de grandes quantités d'énergie dans son noyau rouge."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Gear Spinner",
			'fr-fr': "Tourne Rouage"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon's Gear Spinner attack does +70 damage.",
			'fr-fr': "Pendant votre prochain tour, l'attaque Tourne Rouage de ce Pokémon inflige + 70 dégâts."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card