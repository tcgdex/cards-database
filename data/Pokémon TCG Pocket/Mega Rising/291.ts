import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dartrix"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Rowlet"
	},

	description: {
		en: "This narcissistic Pokémon is a clean freak. If you\ndon't groom it diligently, it may stop listening to you."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Skill Dive"
		},

		cost: ["Grass"],

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card