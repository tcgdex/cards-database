import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'de-de': "Nasgnet"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [299],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Invisible Hand",
				'fr-fr': "Main invisible",
				'de-de': "Unsichtbare Hand"
			},
			effect: {
				'en-us': "If any of your opponent's Active Pokémon are Evolved Pokémon, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Si un des Pokémon Actifs de votre adversaire est un Pokémon Évolué, choisissez une carte dans votre deck et placez-la dans votre main. Mélangez ensuite votre deck.",
				'de-de': "Wenn dein Gegner ein entwickeltes Pokémon als Aktives Pokémon hat, durchsuche dein Deck nach 1 beliebigen Karte und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Repulsion",
				'fr-fr': "Répulsion",
				'de-de': "Abstoßung"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand. (If your opponent doesn't have any Benched Pokémon or other Active Pokémon, this attack does nothing.)",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire doit reprendre dans sa main le Pokémon Défenseur et toutes les cartes qui lui sont attachées (il ne se passe rien si votre adversaire n'a pas d'autres Pokémon Actifs ou d'autres Pokémon sur son Banc).",
				'de-de': "Wirf eine Münze. Bei 'Kopf' nimmt dein Gegner das Verteidigende Pokémon und alle Karten, die daran angelegt sind, auf die Hand. (Hat dein Gegner kein Pokémon auf der Bank oder kein weiteres Aktives Pokémon, dann hat dieser Angriff keine Auswirkungen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275666,
				tcgplayer: 87797
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275666,
				tcgplayer: 87797
			}
		},
	],

}

export default card
