import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Shieldon",
		fr: "Dinoclier",
		es: "Shieldon",
		'es-mx': "Shieldon",
		de: "Schilterus"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [410],
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Antique Armor Fossil"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Smithereen Smash"
		},

		cost: ["Metal", "Colorless"],

		damage: 50,

		effect: {
			en: "Discard 1 Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895846,
				tcgplayer: 704818
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895846,
				tcgplayer: 704818
			}
		},
	],
}

export default card
