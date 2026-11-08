import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Slice",
				'fr-fr': "Mettre en tranche",
				'de-de': "Schnippeln"
			},
			effect: {
				'en-us': "Raichu can't use Slice during your next turn.",
				'fr-fr': "Raichu ne peut pas utiliser Mettre en tranche lors de votre prochain tour.",
				'de-de': "Raichu kann Schnippeln während deines nächsten Zug nicht einsetzen."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Split Ball",
				'fr-fr': "Balle coupée",
				'de-de': "Zerteilball"
			},
			effect: {
				'en-us': "Move an Energy card attached to Raichu to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une carte Énergie attachée à Raichu sur 1 de vos Pokémon de Banc.",
				'de-de': "Entferne 1 an Raichu angelegte Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Burst Ball",
				'fr-fr': "Balle explosive",
				'de-de': "Sprengball"
			},
			effect: {
				'en-us': "Discard 3 Energy attached to any of your Pokémon in any way you like.",
				'fr-fr': "Défaussez 3 Énergies attachées à n'importe lequel de vos Pokémon de la façon que vous voulez.",
				'de-de': "Entferne in beliebiger Verteilung 3 Energien, die an deinen Pokémon angelegt sind und lege sie auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 278306,
		tcgplayer: 88513
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
