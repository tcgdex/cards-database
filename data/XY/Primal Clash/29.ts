import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Camerupt-EX",
		fr: "Camérupt-EEX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 180,
	types: [
		"Fire",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Tumbling Attack",
				fr: "Attaque Trébuchante",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Explosive Jet",
				fr: "Souffle Explosif",
			},
			effect: {
				en: "Discard as many Fire Energy attached to your Pokémon as you like. This attack does 50 damage times the number of Energy cards you discarded.",
				fr: "Défaussez autant d'Énergies Fire attachées à vos Pokémon que vous voulez. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
			},
			damage: 50,

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
