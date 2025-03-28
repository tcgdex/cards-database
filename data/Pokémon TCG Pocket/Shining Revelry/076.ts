import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Grafaiai"
	},

	illustrator: "Teeziro",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Shroodle"
	},

	description: {
		en: "The color of the poisonous saliva depends on what the Pokémon eats. Grafaiai covers its fingers in its saliva and draws patterns on trees in forests."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Poison Coating"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, your opponent's Active Pokémon is now Poisoned."
		}
	}],

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 40,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card