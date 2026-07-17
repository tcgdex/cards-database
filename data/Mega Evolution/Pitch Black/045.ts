import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Rampardos ex",
		fr: "Charkos-ex",
		es: "Rampardos ex",
		'es-mx': "Rampardos ex",
		de: "Rameidon-ex"
	},

	illustrator: "hncl",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [409],
	hp: 330,
	types: ["Fighting"],

	evolveFrom: {
		en: "Cranidos"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Destructive Headbutting"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may flip a coin. If heads, discard an Energy from your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Rampaging Hammer"
		},

		cost: ["Fighting", "Fighting"],

		damage: 150,

		effect: {
			en: "During your next turn, attacks used by this Pokémon deal 150 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895831,
				tcgplayer: 704802
			}
		},
	],
}

export default card
