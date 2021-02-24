import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Camerupt",
		fr: "Camérupt",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Numel",
		fr: "Chamallot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Shard",
				fr: "Écharde de Feu",
			},
			effect: {
				en: "The Defending Pokémon is now Burned. Flip a coin. If heads, the Defending Pokémon is also Paralyzed.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé. Lancez une pièce. Si c'est face, le Pokémon Défenseur est aussi Paralysé.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flamme",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
