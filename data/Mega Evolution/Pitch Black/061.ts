import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "This Pokémon lived in primeval jungles. It's thought that Shieldon had few enemies thanks to its sturdy face.",
		de: "Man nimmt an, dass es dank seines gepanzerten Gesichts kaum Feinde hatte. Es lebte vor Urzeiten im Dschungel."
	},

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
			en: "Smithereen Smash",
			de: "Splitterschlag"
		},

		cost: ["Metal", "Colorless"],

		damage: 50,

		effect: {
			en: "Discard 1 Energy from your opponent's Active Pokémon.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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
