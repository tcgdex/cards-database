import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Staraptor"
	},

	illustrator: "Hasuno",
	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Staravia"
	},

	description: {
		en: "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Wing Attack"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	abilities: [{
		type: "Ability",

		name: {
			en: "Defensive Whirlwind"
		},

		effect: {
			en: "This Pokémon takes −30 damage from attacks from  Pokémon."
		}
	}]
}

export default card
