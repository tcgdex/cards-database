import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Steelix ex",
		'fr-fr': "Steelix ex",
		'de-de': "Stahlos ex"
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
		'en-us': "Onix",
		'fr-fr': "Onix"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Poison Resistance",
				'fr-fr': "Résistance au poison",
				'de-de': "Poison Resistance"
			},
			effect: {
				'en-us': "Steelix ex can't be Poisoned.",
				'fr-fr': "Steelix ex ne peut pas être Empoisonné.",
				'de-de': "Steelix ex can't be Poisoned."
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
				'en-us': "Metal Charge",
				'fr-fr': "Attaque métallique",
				'de-de': "Metal Charge"
			},
			effect: {
				'en-us': "Put 1 damage counter on Steelix ex.",
				'fr-fr': "Placez 1 marqueur de dégât sur Steelix ex.",
				'de-de': "Put 1 damage counter on Steelix ex."
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
				'en-us': "Mudslide",
				'fr-fr': "Coulée de boue",
				'de-de': "Mudslide"
			},
			effect: {
				'en-us': "Discard 2 Fighting Energy attached to Steelix ex and choose 1 of your opponent's Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez 2 Énergies  attachées à Steelix ex et choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 100 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Discard 2  Energy attached to Steelix ex and choose 1 of your opponent's Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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

	
	retreat: 5,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89566,
				cardmarket: 276755
			},
		},
		{
			type: "holo",
			stamp: ["hiroki-yano"],
			thirdParty: {
				tcgplayer: 477965,
				cardmarket: 869516
			},
		}
	],
}

export default card
