import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		596,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Discharge",
				fr: "Coup d'Jus",
			},
			effect: {
				en: "Discard all Lightning Energy attached to this Pokémon. This attack does 30 damage times the number of Energy cards you discarded.",
				fr: "Défaussez toutes les Énergies Lightning attachées à ce Pokémon. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Signal Beam",
				fr: "Rayon Signal",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
