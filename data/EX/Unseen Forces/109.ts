import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Steelix ex",
		fr: "Steelix ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		208,
	],
	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Onix",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Resistance",
				fr: "Résistance au poison"
			},
			effect: {
				en: "Steelix ex can't be Poisoned.",
				fr: "Steelix ex ne peut pas être Empoisonné."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Charge",
				fr: "Attaque métallique"
			},
			effect: {
				en: "Put 1 damage counter on Steelix ex.",
				fr: "Placez 1 marqueur de dégât sur Steelix ex."
			},
			damage: 70,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mudslide",
				fr: "Coulée de boue"
			},
			effect: {
				en: "Discard 2 Fighting Energy attached to Steelix ex and choose 1 of your opponent's Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies  attachées à Steelix ex et choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 100 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
