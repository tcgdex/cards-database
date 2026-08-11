import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Cobalion",
		'fr-fr': "Cobaltium",
		'es-es': "Cobalion",
		'it-it': "Cobalion",
		'pt-br': "Cobalion",
		'de-de': "Kobalium"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		638,
	],

	hp: 110,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Horns",
				'fr-fr': "Cornes de Métal",
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Sacred Sword",
				'fr-fr': "Lame Sainte",
			},
			effect: {
				'en-us': "This Pokémon can't use Sacred Sword during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Lame Sainte pendant votre prochain tour.",
			},
			damage: 100,

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

	retreat: 2,

	description: {
		'en-us': "This legendary Pokémon battled against humans to protect Pokémon. Its personality is calm and composed.",
	},

	thirdParty: {
		cardmarket: 280042,
		tcgplayer: 84377
	}
}

export default card
