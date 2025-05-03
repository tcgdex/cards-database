import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar ex"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Stage2",
	evolveFrom: {
		en: "Haunter"
	},
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Shadowy Spellbind"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent can't use any Supporter cards from their hand."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			en: "Spooky Shot"
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Star"
}

export default card
