import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Hydreigon",
		'fr-fr': "Trioxhydre",
		'es-es': "Hydreigon",
		'it-it': "Hydreigon",
		'pt-br': "Hydreigon",
		'de-de': "Trikephalo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tractorbeam",
				'fr-fr': "Rayon Inversion",
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. This attack does 40 damage to the new Defending Pokémon.",
				'fr-fr': "Échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur. Cette attaque inflige 40 dégâts au nouveau Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Obsidian Fang",
				'fr-fr': "Croc d'Obsidienne",
			},
			effect: {
				'en-us': "Before doing damage, discard all Pokémon Tool cards attached to the Defending Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon attachées au Pokémon Défenseur.",
			},
			damage: 80,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It responds to movement by attacking. This scary, three-headed Pokémon devours everything in its path!",
	},

	thirdParty: {
		cardmarket: 280956,
		tcgplayer: 86244
	}
}

export default card
