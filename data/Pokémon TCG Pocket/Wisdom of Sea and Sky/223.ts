import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoran♀",
		fr: "Nidoran♀"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Females are more sensitive to smells than males.\nWhile foraging, they'll use their whiskers to check\nwind direction and stay downwind of predators.",
		fr: "Son odorat est plus développé que celui du mâle. Quand Nidoran♀ cherche à manger, il reste dans le sens du vent, qu'il détecte avec ses vibrisses."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille"
		},

		cost: ["Darkness"],

		effect: {
			en: "Put 1 random Nidoran♂ from your deck onto your Bench.",
			fr: "Placez une carte  au hasard de votre deck sur votre Banc."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card