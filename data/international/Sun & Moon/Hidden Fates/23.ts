import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Electromagnetic Wall",
				'fr-fr': "Mur Électromagnétique",
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire attache une carte Énergie de sa main à l’un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre",
			},
			effect: {
				'en-us': "Discard all Energy from this Pokémon.",
				'fr-fr': "Défaussez toute l’Énergie de ce Pokémon.",
			},
			damage: 90,

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

	retreat: 0,

	description: {
		'en-us': "Its lungs contain an organ that creates electricity. The crackling sound of electricity can be heard when it exhales.",
	},

	thirdParty: {
		cardmarket: 396622,
		tcgplayer: 197667
	}
}

export default card
