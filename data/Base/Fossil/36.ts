import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Golem",
		fr: "Grolem",
		de: "Geowaz"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Graveler",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Avalanche",
				fr: "Avalanche",
				de: "Lawine"
			},

			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Selfdestruct",
				fr: "Destruction",
				de: "Finale"
			},
			effect: {
				en: "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Golem does 100 damage to itself.",
				fr: "Inflige 20 dégâts à chacun des Pokémon du Banc de chaque joueur. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Grolem s'inflige 100 dégâts.",
				de: "Fügt jeden Pokémon auf der bank eines jeden Spielers 20 Schadenspunkte zu. (Schwäche und resistenz für Pokémon auf der bank nicht anwenden.) Geowaz fügt sich selbst 100 Schadenspunkte zu."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Son corps de pierre est indestructible. Il peut supporter des explosions de dynamite."
	},

	thirdParty: {
		cardmarket: 273897,
		tcgplayer: 44438
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
