import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'de-de': "Kokowei"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "String Bomb",
				'fr-fr': "Bombe en chaîne",
				'de-de': "Fadenbombe"
			},
			effect: {
				'en-us': "Flip a coin for each basic Energy card attached to Exeggutor and to the Defending Pokémon. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque Carte Énergie de base attachée à Noadkoko et au Pokémon Défenseur. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 1 Münze für jede an Kokowei und das Verteidigende Pokémon angelegte Basis-Energiekarte. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Nutritional Support",
				'fr-fr': "Support nutritionnel",
				'de-de': "Nahrungsversorgung"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Grass Energy cards and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck jusqu'à 2 cartes Énergie Grass et attachez-les à vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 -Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon an. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It is called \"The Walking Jungle.\" If a head grows too big, it falls off and becomes an EXEGGCUTE.",
		'fr-fr': "On l'appelle \" jungle sur pattes \". Si une tête devient trop grosse, elle tombe et produit un Noeunoeuf"
	},

	thirdParty: {
		cardmarket: 277653,
		tcgplayer: 85360
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
