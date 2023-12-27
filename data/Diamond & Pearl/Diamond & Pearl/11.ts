import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Palkia",
		fr: "Palkia",
		de: "Palkia"
	},

	illustrator: "Nakaoka",
	rarity: "Rare Holo",
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
				en: "Spacial Rend",
				fr: "Spatio-Rift",
				de: "Raumschlag"
			},
			effect: {
				en: "Search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. If there is any Stadium card in play, discard it.",
				fr: "Choisissez dans votre deck une carte Stade, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck. Si une carte Stade est en jeu, défaussez-la.",
				de: "Durchsuche dein Deck nach 1 Stadion-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Wenn sich bereits eine Stadion-Karte im Spiel befindet, lege diese auf den Ablagestapel."
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
				en: "Transback",
				fr: "Transfert",
				de: "Abtransport"
			},
			effect: {
				en: "You may flip a coin. If heads, discard all Energy attached to Palkia and put the Defending Pokémon and all cards attached to it on top of your opponent's deck. Your opponent shuffles his or her deck afterward.",
				fr: "Vous pouvez lancer une pièce. Si c'est face, défaussez toutes les Énergies attachées à Palkia et placez le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées au dessus du deck de votre adversaire. Ensuite, votre adversaire mélange son deck.",
				de: "Du kannst 1 Münze werfen. Bei 'Kopf' lege alle Energien, die an Palkia angelegt sind, auf deinen Ablagestapel. Danach lege das Verteidigende Pokémon und alle an es angelegten Karten auf das Deck deines Gegners. Dein Gegner mischt sein Deck danach."
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
		fr: "Il peut modeler l'espace. Les mythes de Sinnoh en parlent comme d'une divinité ancienne."
	}
}

export default card
