import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Charizard",
		'fr-fr': "Dracaufeu",
		'de-de': "Glurak"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [6],

	hp: 100,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel"
	},

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Miracle Shift",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), discard a basic Energy card attached to 1 of your Pokémon. Then, choose a basic Energy card from your discard pile and attach it to that Pokémon. This power can't be used if Togetic is affected by a Special Condition.",
			},
		},
	],
	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				'en-us': "Tail Smash",
				'fr-fr': "Éclate-queue",
				'de-de': "Schwanzschmetterer"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei Zahl hat dieser Angriff keine Auswirkungen."
			},

			damage: 40,
		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flammes",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard 1 Fire Energy card attached to Charizard.",
				'fr-fr': "Défaussez-vous d'une carte Énergie  attachée à Dracaufeu.",
				'de-de': "Lege 1 an Glurak angelegte  Energiekarte auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84184,
				cardmarket: 274881
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84184,
				cardmarket: 274881
			},
		},
	],
}

export default card
