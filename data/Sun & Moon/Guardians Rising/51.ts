import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Garbodor",
		fr: "Miasmax",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		569,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Trashalanche",
				fr: "Avalanche de Déchets",
			},
			effect: {
				en: "This attack does 20 damage for each Item card in your opponent's discard pile.",
				fr: "Cette attaque inflige 20 dégâts pour chaque carte Objet dans la pile de défausse de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Acid Spray",
				fr: "Bombe Acide",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
