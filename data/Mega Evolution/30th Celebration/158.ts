import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Mew"
	},

	illustrator: "YOSHIROTTEN",
	rarity: "Futuristic Rare",
	category: "Pokemon",
	dexId: [151],
	hp: 160,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",
		name: {
			en: "Memory Helix"
		},

		effect: {
			en: "This Pokémon can use the attacks of any of your Benched Pokémon. (You still need the necessary Energy to use each attack.)"
		}
	}],

	attacks: [{
		name: {
			en: "Teleportation Burst"
		},

		cost: ["Psychic"],

		damage: 30,

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907762,
				tcgplayer: 696688
			}
		}
	],
}

export default card
