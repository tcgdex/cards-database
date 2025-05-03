import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Glaceon ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Snowy Terrain"
		},

		effect: {
			en: "During Pokémon Checkup, if this Pokémon is in the Active Spot, do 10 damage to your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Freezing Wind"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card