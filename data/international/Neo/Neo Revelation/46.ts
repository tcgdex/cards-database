import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'de-de': "Kramurx"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		198,
	],

	hp: 40,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Familie holen"
			},
			effect: {
				'en-us': "Search your deck for a card named Murkrow and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				'fr-fr': "Cherchez une carte Pokémon de base de Cornèbre dans votre deck et placez-la sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				'de-de': "Durchsuche dein Deck nach einer Basis-Pokémon-Karte mit dem Namen Kramurx und lege sie auf deine Bank. Mische danach dein Deck. (Du kannst diesen Angriff nicht verwenden, wenn deine Bank voll ist.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flock Attack",
				'fr-fr': "Attaque en masse",
				'de-de': "Schwarmangriff"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the number of Murkrows on your Bench. This attack does 10 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez un nombre de pièces égal au nombre de cartes Cornèbre sur votre Banc. Cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf so viele Münzen, wie Kramurxe auf deine Bank sind. Dieser Angriff fügt 10 Schadenspunkte pro geworfenem 'Kopf' zu."
			},
			damage: "10+",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		'en-us': "Feared and loathed by many, it is believed to bring misfortune to all those who see it at night.",
		'fr-fr': "Craint et détesté de tous, on raconte qu'il apporte le malheur à ceux qui l'aperçoivent la nuit."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274632,
				tcgplayer: 87647
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274632,
				tcgplayer: 87647
			}
		}
	]
}

export default card

