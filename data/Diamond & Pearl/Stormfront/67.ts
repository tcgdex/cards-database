import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magneti",
		de: "Magnetilo"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	evolveFrom: {
		fr: "Magneti",
	},

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Random Spark",
				fr: "Étincelle surprise",
				de: "Zufälliger Funke"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Ses extrémités génèrent les vagues électromagnétiques qui le font voler. Il se nourrit d'électricité."
	},

	thirdParty: {
		cardmarket: 278364
	}
}

export default card
