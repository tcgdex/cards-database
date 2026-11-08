import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Escavalier",
		'fr-fr': "Lançargot",
		'es-es': "Escavalier",
		'it-it': "Escavalier",
		'pt-br': "Escavalier",
		'de-de': "Cavalanzas"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		589,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Steamroll",
				'fr-fr': "Rouleau Compresseur",
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Strike",
				'fr-fr': "Coup Déchirant",
			},
			effect: {
				'en-us': "This Pokémon can't use Slashing Strike during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
		'en-us': "Wearing the shell covering they stole from Shelmet, they defend themselves and attack with two lances.",
	},

	thirdParty: {
		cardmarket: 281082,
		tcgplayer: 85315
	}
}

export default card
