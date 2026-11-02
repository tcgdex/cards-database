import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Ursaring",
		fr: "Ursaring",
		es: "Ursaring",
		it: "Ursaring",
		pt: "Ursaring",
		de: "Ursaring"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa",
		de: "Teddiursa"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Adrenalash",
				fr: "Adrénarush",
				de: "Adrenalinschub"
			},
			effect: {
				en: "During your next turn, each of this Pokémon's attacks does 50 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				de: "Während deines nächsten Zuges fügt jeder Angriff dieses Pokémon 50 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strength",
				fr: "Force",
				de: "Stärke"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "In its territory, it leaves scratches on trees that bear delicious berries or fruits.",
		de: "Es durchstreift sein Revier und markiert Bäume, die Früchte oder Beeren tragen, mit Kratzern."
	},

	thirdParty: {
		cardmarket: 281097,
		tcgplayer: 90258
	}
}

export default card
