import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		73,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Tentavolve",
				fr: "Tentavolution",
			},
			effect: {
				en: "If Tentacruel evolved from Tentacool during this turn, the Defending Pokémon is now Paralyzed and Poisoned.",
				fr: "Si Tentacruel a évolué en Tentacool pendant ce tour, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
