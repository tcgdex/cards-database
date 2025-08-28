import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Cursola"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Galarian Corsola"
	},

	description: {
		en: "Its shell is overflowing with its heightened\notherworldly energy. The ectoplasm serves as\nprotection for this Pokémon's core spirit."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Perish Body"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, flip a coin. If heads, the Attacking Pokémon is Knocked Out."
		}
	}],

	attacks: [{
		name: {
			en: "Spooky Shot"
		},

		damage: 60,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card