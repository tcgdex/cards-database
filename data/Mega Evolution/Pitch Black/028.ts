import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "This seems to be the Iron Serpent mentioned in an old book. The Iron Serpent is said to have turned the land to ash with its lightning."
	},

	name: {
		en: "Miraidon",
		fr: "Miraidon",
		es: "Miraidon",
		'es-mx': "Miraidon",
		de: "Miraidon"
	},

	illustrator: "mashu",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1008],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Photon Cord"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an opponent's attack, move up to 2 Basic Lightning Energy from this Pokémon to 1 of your Benched Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Thunder"
		},

		cost: ["Lightning", "Lightning"],

		damage: 90,

		effect: {
			en: "This Pokémon also does 30 damage to itself"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895815,
				tcgplayer: 704785
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895815,
				tcgplayer: 704785
			}
		},
	],
}

export default card
