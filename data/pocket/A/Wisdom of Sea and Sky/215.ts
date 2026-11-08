import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [130],
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Magikarp"
	},

	description: {
		'en-us': "Once it appears, it goes on a rampage.\nIt remains enraged until it demolishes\neverything around it.",
		'fr-fr': "Lorsqu'il apparaît, il saccage tout. Sa fureur ne se calme pas tant qu'il n'a pas tout détruit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Wild Swing",
			'fr-fr': "Folle Frappe"
		},

		damage: 20,
		cost: ["Water", "Water"],

		effect: {
			'en-us': "You may discard any number of your Benched {W} Pokémon. This attack does 40 more damage for each Benched Pokémon you discarded in this way.",
			'fr-fr': "Vous pouvez défausser autant de vos Pokémon Eau de Banc que vous le voulez. Cette attaque inflige 40 dégâts supplémentaires pour chaque Pokémon de Banc défaussé de cette façon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lugia"]
}

export default card