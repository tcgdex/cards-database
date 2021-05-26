import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine",
	},
	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psy Bolt",
				fr: "Choc Mental",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Miraculous Spin",
				fr: "Tournoiement Miraculeux",
			},
			effect: {
				en: "This attack does 40 damage for each Steven's Resolve card in your discard pile.",
				fr: "Cette attaque inflige 40 dégâts pour chaque carte Résolution de Pierre dans votre pile de défausse.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
