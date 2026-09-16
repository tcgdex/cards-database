import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [94],
	hp: 280,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",
		name: {
			en: "Fainting Spell"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, flip a coin. If heads, the Attacking Pokémon is Knocked Out."
		}
	}],

	attacks: [{
		name: {
			en: "Chaotic Pain"
		},

		cost: ["Darkness", "Darkness"],

		effect: {
			en: "Place 13 damage counters on 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907697,
				tcgplayer: 716485
			}
		}
	],
}

export default card
