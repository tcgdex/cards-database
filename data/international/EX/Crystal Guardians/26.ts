import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Pelipper δ",
		'fr-fr': "Bekipan δ",
		'de-de': "Pelipper"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		279,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Wingull",
		'fr-fr': "Goélise"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Delta Transport",
				'fr-fr': "Transport Delta",
				'de-de': "Delta-Transport"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Pelipper is on your Bench, you may switch 1 of your Active Pokémon that has δ on its card with 1 of your Benched Pokémon.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Bekipan se trouve sur votre Banc, vous pouvez échanger 1 de vos Pokémon Actifs possédant le symbole δ avec 1 des Pokémon de votre Banc.",
				'de-de': "Ein Mal während deines Zuges (vor deinem Angriff), wenn Pelipper auf deiner Bank liegt, kannst du 1 deiner Aktiven Pokémon, auf dem δ zu sehen ist, gegen 1 Pokémon auf deiner Bank austauschen."
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
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-aile",
				'de-de': "Flügelschlag"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277107
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
