import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Luxray",
		fr: "Luxray",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		405,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Fang Snipe",
				fr: "Croc Ciblé",
			},
			effect: {
				en: "Your opponent reveals his or her hand. Discard a Trainer card you find there.",
				fr: "Votre adversaire montre sa main. Défaussez une carte Dresseur que vous y trouvez.",
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Wild Charge",
				fr: "Éclair Fou",
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
			},
			damage: 120,

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
	retreat: 1,



}

export default card
