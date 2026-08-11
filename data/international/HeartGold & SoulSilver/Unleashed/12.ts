import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'de-de': "Bibor"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [15],

	hp: 110,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Twineedle",
				'fr-fr': "Double-dard",
				'de-de': "Duonadel"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Paralyze Poison",
				'fr-fr': "Poison paralysant",
				'de-de': "Lähmendes Gift"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon is also Paralyzed.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c’est face, le Pokémon Défenseur est aussi Paralysé.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet. Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon zusätzlich gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It can take down any opponent with its powerful poison stingers. It sometimes attacks in swarms."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83772,
				cardmarket: 279168
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83772,
				cardmarket: 279168
			}
		},
	],

}

export default card
