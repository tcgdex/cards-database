import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Crawdaunt G",
		'fr-fr': "Colhomard ",
		'de-de': "Krebutack G"
	},
	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [342],
	hp: 80,
	types: [
		"Darkness"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smash Turn",
				'fr-fr': "Tour fracassant",
				'de-de': "Abdrehender Schmetterer"
			},
			effect: {
				'en-us': "You may switch Crawdaunt G with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger Colhomard  avec 1 de vos Pokémon de Banc.",
				'de-de': "Du kannst Krebutack G gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'de-de': "Hyperstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278714,
				tcgplayer: 84466
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278714,
				tcgplayer: 84466
			}
		},
	],

}

export default card
