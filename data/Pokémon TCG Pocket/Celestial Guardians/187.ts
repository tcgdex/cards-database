import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Passimian ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Offload Pass"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, move all  Energy from this Pokémon to 1 of your Benched Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Seismic Toss"
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card