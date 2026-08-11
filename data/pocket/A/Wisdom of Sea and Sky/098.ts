import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mamoswine",
		'fr-fr': "Mammochon"
	},

	illustrator: "Uta",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [473],
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Piloswine"
	},

	description: {
		'en-us': "This Pokémon can be spotted in wall paintings\nfrom as far back as 10,000 years ago. For a\nwhile, it was thought to have gone extinct.",
		'fr-fr': "On le retrouve dessiné sur des fresques murales vieilles de 10 000 ans. On a cru pendant un temps que son espèce s'était éteinte."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Earthquake",
			'fr-fr': "Séisme"
		},

		damage: 160,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "This attack also does 20 damage to each of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["ho-oh"]
}

export default card