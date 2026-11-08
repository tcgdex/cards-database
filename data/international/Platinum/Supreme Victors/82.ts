import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'de-de': "Rotom"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [479],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Discharge",
				'fr-fr': "Coup d'Jus",
				'de-de': "Ladungsstoß"
			},
			effect: {
				'en-us': "Discard all Lightning Energy attached to Rotom. Flip a coin for each Energy card you discarded. This attack does 40 damage times the number of heads.",
				'fr-fr': "Défaussez toutes les Énergies Lightning attachées à Motisma. Lancez une pièce pour chaque carte Énergie défaussée. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				'de-de': "Entferne alle -Energien von Rotom und lege sie auf deinen Ablagestapel. Wirf für jede auf diese Weise auf deinen Ablagestapel gelegte Energiekarte 1 Münze. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Uproar",
				'fr-fr': "Brouhaha",
				'de-de': "Aufruhr"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Its electric-like body can enter some kinds of machines and take control in order to make mischief."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88838,
				cardmarket: 278773
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278773,
				tcgplayer: 88838
			}
		},
	],

}

export default card
