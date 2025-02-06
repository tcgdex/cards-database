import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario"
	},

	illustrator: "Akira Komayama",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Riolu"
	},

	description: {
		en: "It's said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fighting Coach"
		},

		effect: {
			en: "Attacks used by your <span class=\"energy-text energy-text--type-fighting\"></span> Pokémon do +20 damage to your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Submarine Blow"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card
