import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Pokémon Trader",
		'fr-fr': "Marchand de Pokémon",
		'de-de': "Pokémon-Händler",
		'it-it': "Scambio di Pokémon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Trade 1 of the Basic Pokémon or Evolution cards in your hand for 1 of the Basic Pokémon or Evolution cards from your deck. Show both cards to your opponent. Shuffle your deck afterward.",
		'fr-fr': "Échangez 1 carte Pokémon de base ou Évolution de votre main contre 1 carte Pokémon de base ou Évolution de votre deck. Montrez les deux cartes à votre adversaire. Ensuite, mélangez votre deck.",
		'de-de': "Tausche eines der Basis-Pokémon oder eine der Evolutionskarten in Deiner Hand gegen eines der Basis-Pokémon oder eine Evoltionskarte aus Deinem Stapel. Zeige Deinem Gegner beide Karten. Mische danach Deinen Stapel.",
		'it-it': "Scambia una carta Pokémon Base o una carta Evoluzione che hai in mano con una carta Pokémon Base o una carta Evoluzione nel tuo mazzo. Mostra entrambe le carte al tuo avversario e poi mischia il mazzo.",
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273772,
				tcgplayer: 108648
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107073
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107073
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
