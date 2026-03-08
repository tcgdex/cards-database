import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Mamoswine",
		fr: "Mammochon"
	},

	illustrator: "Uta",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [473],
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Piloswine"
	},

	description: {
		en: "This Pokémon can be spotted in wall paintings\nfrom as far back as 10,000 years ago. For a\nwhile, it was thought to have gone extinct.",
		fr: "On le retrouve dessiné sur des fresques murales vieilles de 10 000 ans. On a cru pendant un temps que son espèce s'était éteinte."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Earthquake",
			fr: "Séisme"
		},

		damage: 160,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			en: "This attack also does 20 damage to each of your Benched Pokémon.",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc."
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