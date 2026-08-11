import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Furret",
		'fr-fr': "Fouinar",
		'de-de': "Wiesenior"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		162,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Keen Eye",
				'fr-fr': "Regard vif",
				'de-de': "Adlerauge"
			},
			effect: {
				'en-us': "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez jusqu'à 2 cartes dans votre deck et placez-les dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Baton Pass",
				'fr-fr': "Relais",
				'de-de': "Stafette"
			},
			effect: {
				'en-us': "You may switch Furret with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Furret as you like to the new Active Pokémon.",
				'fr-fr': "Vous pouvez échanger Fouinar avec 1 des Pokémon de votre Banc. Déplacez alors autant de cartes Énergie attachées à Fouinar que vous voulez sur le nouveau Pokémon Actif.",
				'de-de': "Du kannst Wiesenior gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, kannst du eine beliebige Anzahl an Wiesenior angelegter Energiekarten entfernen und an das neue Aktive Pokémon anlegen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The mother puts its offspring to sleep by curling up around them. It corners foes with speed.",
	},

	thirdParty: {
		cardmarket: 277780,
		tcgplayer: 85593
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
