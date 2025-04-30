import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Solgaleo ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	evolveFrom: {
		en: "Cosmoem"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rising Road"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may switch it with your Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Sol Breaker"
		},

		damage: 120,
		cost: ["Metal", "Metal"],

		effect: {
			en: "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card