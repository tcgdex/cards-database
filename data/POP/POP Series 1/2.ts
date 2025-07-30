import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Metalosse"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Metang",
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
				fr: "Griffe acier"
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
				fr: "Ultralaser"
			},
			effect: {
				en: "Flip a coin. If heads, discard 1 Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez 1 Énergie attachée au Pokémon Défenseur."
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

	thirdParty: {
		cardmarket: 277416,
		tcgplayer: 87336
	}
}

export default card
