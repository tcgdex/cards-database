import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Windstorm",
		'fr-fr': "Tempête",
		'de-de': "Sturmwind"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Choose up to 2 in any combination of Pokémon Tool cards and Stadium cards in play (both yours and your opponent's) and discard them.",
		'fr-fr': "Choisissez jusqu'à 2 cartes parmi les cartes Outil Pokémon et les cartes Stade en jeu (les vôtres et celles de votre adversaire) et défaussez-les.",
		'de-de': "Wähle 2 Karten in beliebiger Kombination aus sich im Spiel befindlichen Pokémon-Ausrüstungs-Karten und Stadion-Karten (deine oder deines Gegners). Lege diese Karten auf den Ablagestapel."
	},

	thirdParty: {
		cardmarket: 277166,
		tcgplayer: 90604
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jun-hasebe"]
		},
		{
			type: "normal",
			stamp: ["tom-roos"]
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card
