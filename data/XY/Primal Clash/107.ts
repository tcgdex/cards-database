import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 130,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Twister",
				fr: "Ouragan",
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard an Energy attached to your opponent's Active Pokémon. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
