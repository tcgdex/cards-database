import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "There was a scientist who peeked under Mimikyu's old rag in the name of research. The scientist died of a mysterious disease."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Shadow Hit"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "This attack also does 20 damage to 1 of your Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card