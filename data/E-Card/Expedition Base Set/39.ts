import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		de: "Glurak"
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
		en: "Charmeleon",
		fr: "Reptincel"
	},

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Miracle Shift",
			},
			effect: {
				en: "Once during your turn (before your attack), discard a basic Energy card attached to 1 of your Pokémon. Then, choose a basic Energy card from your discard pile and attach it to that Pokémon. This power can't be used if Togetic is affected by a Special Condition.",
			},
		},
	],,
	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				en: "Tail Smash",
				fr: "Éclate-queue",
				de: "Schwanzschmetterer"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei Zahl hat dieser Angriff keine Auswirkungen."
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
				en: "Flamethrower",
				fr: "Lance-flammes",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard 1 Fire Energy card attached to Charizard.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Dracaufeu.",
				de: "Lege 1 an Glurak angelegte  Energiekarte auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],,
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
