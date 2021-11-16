import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Rhydon",
		fr: "Rhinoféros de Team Magma"
	},
	illustrator: "T. Honda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		112,
	],
	hp: 80,
	types: [
		"Fighting",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Second Strike",
				fr: "Deuxième coup"
			},
			effect: {
				en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 20 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà au moins 2 marqueurs de dégâts, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Land Crush",
				fr: "Écrasement au sol"
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy card attached to Team Magma's Rhydon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une carte Énergie attachée à Rhinoféros de Team Magma."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
