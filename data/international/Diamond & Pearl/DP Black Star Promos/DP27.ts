import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Palkia",
		'fr-fr': "Palkia",
		'de-de': "Palkia"
	},

	illustrator: "Daisuke Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		484,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Spacial Rend",
				'fr-fr': "Spatio-Rift",
				'de-de': "Raumschlag"
			},
			effect: {
				'en-us': "Search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. If there is any Stadium card in play, discard it.",
				'fr-fr': "Choisissez dans votre deck une carte Stade, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck. Si une carte Stade est en jeu, défaussez-la.",
				'de-de': "Durchsuche dein Deck nach 1 Stadion-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Wenn sich bereits eine Stadion-Karte im Spiel befindet, lege diese auf den Ablagestapel."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Transback",
				'fr-fr': "Transfert",
				'de-de': "Abtransport"
			},
			effect: {
				'en-us': "You may flip a coin. If heads, discard all Energy attached to Palkia and put the Defending Pokémon and all cards attached to it on top of your opponent's deck. Your opponent shuffles his or her deck afterward.",
				'fr-fr': "Vous pouvez lancer une pièce. Si c'est face, défaussez toutes les Énergies attachées à Palkia et placez le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées au dessus du deck de votre adversaire. Ensuite, votre adversaire mélange son deck.",
				'de-de': "Du kannst 1 Münze werfen. Bei \"Kopf\" lege alle Energien, die an Palkia angelegt sind, auf deinen Ablagestapel. Danach lege das Verteidigende Pokémon und alle an es angelegten Karten auf das Deck deines Gegners. Dein Gegner mischt sein Deck danach."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.",
		'fr-fr': "Il peut modeler l'espace. Les mythes de Sinnoh en parlent comme d'une divinité ancienne."
	},

	variants: [
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "holo",
			size: "jumbo",
			foil: "cracked-ice"
		},
		{
			type: "holo",
			size: "jumbo",
			foil: "mirror"
		}
	],
}

export default card
