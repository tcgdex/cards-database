import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'de-de': "Glutexo"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fire Fang",
				'fr-fr': "Crocs Feu",
				'de-de': "Feuerzahn"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare Tail",
				'fr-fr': "Queue flamboyante",
				'de-de': "Fackelschweif"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard a Fire Energy attached to Charmeleon and this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie Fire attachée à Reptincel et cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege eine -Energie, die an Glutexo angelegt ist, auf deinen Ablagestapel und dieser Angriff fügt 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "In the rocky mountains where CHARMELEON live, their fiery tails shine at night like stars.",
	},

	thirdParty: {
		cardmarket: 277799,
		tcgplayer: 84231
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
