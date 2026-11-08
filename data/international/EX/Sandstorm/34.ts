import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'de-de': "Enekoro"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [301],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ultra Energy Source",
				'fr-fr': "Source d'énergie ultra",
				'de-de': "Ultra Energiequelle"
			},
			effect: {
				'en-us': "Does 10 damage times the number of basic Energy cards attached to all of the Active Pokémon (both yours and your opponent's).",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées aux Pokémon Actifs (les vôtres et ceux de votre adversaire).",
				'de-de': "Fügt für jede Basis-Energie, die an allen Aktiven Pokémon (deine und die des Gegners) angelegt ist, 10 Schadenspunkte zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275811,
				tcgplayer: 84736
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275811,
				tcgplayer: 84736
			}
		},
	],

}

export default card
