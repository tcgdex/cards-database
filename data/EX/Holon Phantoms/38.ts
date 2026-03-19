import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine",
		de: "Lepumentas"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wide Laser",
				fr: "Laser de grande envergure",
				de: "Streulaser"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt allen gegnerischen Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
				de: "Hyperstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Wirf eine Münze. Bei \"Kopf\" lege 1 Energiekarte von dem Verteidigendem Pokémon auf den Ablagestapel deines Gegners."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277008,
		tcgplayer: 84336
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
