import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Magmortar",
		'fr-fr': "Maganon",
		'de-de': "Magbrant"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [467],

	hp: 110,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Magmar",
		'fr-fr': "Magmar"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hard Crush",
				'fr-fr': "Écras’dur",
				'de-de': "Heftiger Zermalmer"
			},
			effect: {
				'en-us': "Discard the top 3 cards from your deck. This attack does 50 damage times the number of Energy cards you discarded.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
				'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mantle Bazooka",
				'fr-fr': "Bazoocape",
				'de-de': "Verhüllte Panzerfaust"
			},
			effect: {
				'en-us': "Discard 2 Fire Energy attached to Magmortar.",
				'fr-fr': "Défaussez 2 cartes Énergie Fire attachées à Maganon.",
				'de-de': "Lege 2 an Magbrant angelgte -Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It blasts fireballs of over 3,600 degrees Fahrenheit out of its arms. Its breath also sears and sizzles."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87059,
				cardmarket: 279158
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87059,
				cardmarket: 279158
			}
		},
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				tcgplayer: 226911
			}
		},
	],

}

export default card
