import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Voltorb",
		fr: "Voltorbe"
	},

	illustrator: "Scav",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "It rolls to move. If the ground is uneven, a sudden\njolt from hitting a bump can cause it to explode.",
		fr: "Il se déplace en roulant. Si le sol est cabossé, les chocs le font exploser."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Big Explosion",
			fr: "Grosse Explosion"
		},

		damage: 30,
		cost: ["Lightning"],

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card