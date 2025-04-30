import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	evolveFrom: {
		en: "Haunter"
	},

	stage: "Stage2",
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
		name: {
			en: "Spooky Shot"
		},

		damage: 100,
		cost: ["Psychic", "Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card