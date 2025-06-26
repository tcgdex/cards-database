import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Flareon ex"
	},

	illustrator: "Kuroimori",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		en: "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Combust"
		},

		effect: {
			en: "Once during your turn, you may attach a {R} Energy from your discard pile to this Pokémon. If you do, do 20 damage to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Fire Spin"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "Discard 2 {R} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card