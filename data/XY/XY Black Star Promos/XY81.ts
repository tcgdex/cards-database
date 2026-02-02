import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "White Kyurem",
		fr: "Kyurem Blanc",
	},

	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Flare Blizzard",
				fr: "Blizzard Flamboyant"
			},
			effect: {
				en: "This Pokémon can't use Flare Blizzard during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Blizzard Flamboyant pendant votre prochain tour."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 289804
	}
}

export default card
