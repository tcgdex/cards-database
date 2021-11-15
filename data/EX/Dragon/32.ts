import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Leviator"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dragon Crush",
				fr: "Écras'dragon"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each Defending Pokémon. Discard an Energy card from each Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon Défenseur. Défaussez une carte Énergie de chacun de ces Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
				fr: "Aquasonique"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
