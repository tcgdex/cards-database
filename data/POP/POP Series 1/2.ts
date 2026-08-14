import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Metalosse",
		de: "Metagross"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [376],

	hp: 100,

	types: [
		"Metal"
	],

	evolveFrom: {
		en: "Metang",
		fr: "Métang",
		de: "Metang"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
				fr: "Griffe acier",
				de: "Metallklaue"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
				de: "Hyperstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, discard 1 Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez 1 Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei „Kopf“ lege 1 Energiekarte von dem Verteidigenden Pokémon auf den Ablagestapel deines Gegners."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87336,
				cardmarket: 277416
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87336,
				cardmarket: 277416
			},
		},
	],

}

export default card
