import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon",
		fr: "Voltali"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [135],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "It concentrates the weak electric charges emitted\nby its cells and launches wicked lightning bolts.",
		fr: "Il concentre la faible charge électrique générée par chacune de ses cellules pour projeter de puissants éclairs."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Beginning Bolt",
			fr: "Premier Éclair"
		},

		damage: 40,
		cost: ["Lightning"],

		effect: {
			en: "If this Pokémon evolved during this turn, this attack does 20 more damage.",
			fr: "Si ce Pokémon a évolué pendant ce tour, cette attaque inflige 20 dégâts supplémentaires."
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