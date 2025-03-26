import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Riolu"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Aura Sphere"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Fighting"],

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card