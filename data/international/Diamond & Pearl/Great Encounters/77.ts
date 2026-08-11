import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Luvdisc",
		'fr-fr': "Lovdisc",
		'de-de': "Liebiskus"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		370,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rendezvous",
				'fr-fr': "Rendezvous",
				'de-de': "Verabredung"
			},
			effect: {
				'en-us': "Reveal the top card of your deck and put it into your hand. If that card is a Pokémon, draw 2 cards.",
				'fr-fr': "Retournez la carte du dessus de votre deck et placez-la dans votre main. Si c'est un Pokémon, piochez 2 cartes.",
				'de-de': "Decke die oberste Karte deines Decks auf und nimm sie auf die Hand. Wenn diese Karte eine Pokémon-Karte ist, ziehe 2 weitere Karten."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Synchro Dance",
				'fr-fr': "Danse synchronisée",
				'de-de': "Synchrontanz"
			},
			effect: {
				'en-us': "If Luvdisc and the Defending Pokémon have the same amount of Energy attached to them, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Si Lovdisc et le Pokémon Défenseur possède le même nombre d'Énergies, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn an Liebiskus und dem Verteidigenden Pokémon die gleiche Anzahl Energien angelegt sind, fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in warm seas. It is said that a couple finding this Pokémon will be blessed with eternal love.",
	},

	thirdParty: {
		cardmarket: 277979,
		tcgplayer: 86936
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
