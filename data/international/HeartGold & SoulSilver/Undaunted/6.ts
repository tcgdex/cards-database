import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'de-de': "Magcargo"
	},

	illustrator: "Yuka Morii",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [219],

	hp: 100,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes calcinantes",
				'de-de': "Sengende Flammen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Lava Flow",
				'fr-fr': "Torrent de lave",
				'de-de': "Lavaschub"
			},
			effect: {
				'en-us': "You may discard any number of Fire Energy cards attached to Magcargo. If you do , this attack does 60 damage plus 20 more damage for each Fire Energy card you discarded.",
				'fr-fr': "Vous pouvez défausser autant de cartes Énergie Fire attachées à Volcaropod que vous le souhaitez. Dans ce cas, cette attaque inflige 60 dégâts plus 20 dégâts pour chaque carte Énergie Fire que vous avez défaussée.",
				'de-de': "Du darfst beliebig viele der an Magcargo angelegten -Energiekarten auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 60 Schadenspunkte plus 20 weitere Schadenspunkte für jede abgelegte -Energiekarte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its brittle shell occasionally spouts intense flames that circulate throughout its body."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279259,
				tcgplayer: 87017
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279259,
				tcgplayer: 87017
			}
		}
	],

}

export default card
