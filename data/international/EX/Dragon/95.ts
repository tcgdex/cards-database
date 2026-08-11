import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Magcargo ex",
		'fr-fr': "Volcaropod ex",
		'de-de': "Magcargo ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [219],

	hp: 100,

	stage: "Basic",
	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Melting Mountain",
				'fr-fr': "Montagne fondante",
				'de-de': "Melting Mountain"
			},
			effect: {
				'en-us': "Discard the top card from your deck. If that card is a basic Energy card, attach it to Magcargo ex.",
				'fr-fr': "Défaussez la première carte de votre deck. Si cette carte est une carte Énergie de base, attachez-la à Volcaropod ex.",
				'de-de': "Discard the top card from your deck. If that card is a basic Energy card, attach it to Magcargo ex."
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
				'de-de': "Lava Flow"
			},
			effect: {
				'en-us': "You may discard any number of basic Energy cards attached to Magcargo ex when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each basic Energy card you discarded.",
				'fr-fr': "Vous pouvez défausser autant de cartes Énergie de base attachées à Volcaropod ex que vous le voulez lorsque vous utilisez cette attaque. Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie de base que vous défaussez.",
				'de-de': "You may discard any number of basic Energy card attached to Magcargo ex when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each basic Energy card you discarded."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87019,
				cardmarket: 275972
			},
		},
	],

}

export default card
