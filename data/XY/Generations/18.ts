import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "M Blastoise EX",
		fr: "M-Tortank-EX",
		de: "M-Turtok-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 220,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Blastoise-EX",
		fr: "Tortank-EX",
		de: "Turtok-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dread Launcher",
				fr: "Lanceur d'Effroi",
				de: "Schleuder des Grauens"
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Water Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez 2 Énergies Water attachées à ce Pokémon.",
				de: "Wirf 1 Münze. Lege bei „Zahl“ 2 an dieses Pokémon angelegte {W}-Energien auf deinen Ablagestapel."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		tcgplayer: 113676
	}
}

export default card
