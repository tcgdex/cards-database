import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Élekable",
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		466,
	],
	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tag Team Spark",
				fr: "Étincelle Groupée",
			},
			effect: {
				en: "This attack does 20 more damage for each Energy attached to your Magmortar.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à vos Maganon.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gigavolt",
				fr: "Gigavolt",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage. If tails, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
