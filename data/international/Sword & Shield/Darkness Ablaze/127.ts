import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [601],

	name: {
		'en-us': "Klinklang",
		'fr-fr': "Cliticlic",
		'es-es': "Klinklang",
		'it-it': "Klinklang",
		'pt-br': "Klinklang",
		'de-de': "Klikdiklak"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Klang",
		'fr-fr': "Clic",
		'es-es': "Klang",
		'it-it': "Klang",
		'pt-br': "Klang",
		'de-de': "Kliklak"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Beam",
				'fr-fr': "Rayon",
				'es-es': "Transmisión",
				'it-it': "Raggio",
				'pt-br': "Feixe",
				'de-de': "Strahl"
			},

			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Clockwork",
				'fr-fr': "Mécanisme",
				'es-es': "Mecanismo de Relojería",
				'it-it': "Ingranaggi",
				'pt-br': "Mecanismo",
				'de-de': "Uhrwerk"
			},
			effect: {
				'en-us': "If you don't have Klink and Klang on your Bench, this attack does nothing.",
				'fr-fr': "Si vous n'avez pas Tic et Clic sur votre Banc, cette attaque ne fait rien.",
				'es-es': "Si no tienes a Klink y Klang en tu Banca, este ataque no hace nada.",
				'it-it': "Se non hai Klink e Klang nella tua panchina, questo attacco non ha effetto.",
				'pt-br': "Se Klink e Klang não estiverem no seu Banco, este ataque não fará nada.",
				'de-de': "Wenn sich Klikk und Kliklak nicht auf deiner Bank befinden, hat diese Attacke keine Auswirkungen."
			},
			damage: 200,

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "From its spikes, it launches powerful blasts of electricity. Its red core contains an enormous amount of energy."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483514,
				tcgplayer: 219388
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483514,
				tcgplayer: 219388
			}
		},
	],
}

export default card
