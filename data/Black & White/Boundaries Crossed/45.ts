import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Jellicent",
		fr: "Moyade",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		593,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stickiness",
				fr: "Viscosité",
			},
			effect: {
				en: "The Retreat Cost of each of your opponent's Pokémon in play is Colorless more.",
				fr: "Le coût de Retraite de chacun des Pokémon de votre adversaire est augmenté de Colorless.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eerie Light",
				fr: "Lumière Étrange",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
