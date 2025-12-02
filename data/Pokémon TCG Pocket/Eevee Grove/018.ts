import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Vanillite",
		fr: "Sorbébé"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [582],
	hp: 60,
	types: ["Water"],

	description: {
		en: "Unable to survive in hot areas, it makes itself\ncomfortable by breathing out air cold enough to\ncause snow. It burrows into the snow to sleep.",
		fr: "Il ne peut pas vivre dans les contrées chaudes. Il souffle un air glacial pour faire tomber la neige, puis s'y plonge pour dormir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sweets Relay",
			fr: "Saupoudrage Sucré"
		},

		damage: 10,
		cost: ["Water"],

		effect: {
			en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
			fr: "Si un de vos Pokémon a utilisé  lors de votre dernier tour, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card