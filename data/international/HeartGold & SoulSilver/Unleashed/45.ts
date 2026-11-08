import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Buizel",
		'fr-fr': "Mustébouée",
		'de-de': "Bamelin"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [418],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Muddy Water",
				'fr-fr': "Ocroupi",
				'de-de': "Lehmbrühe"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à l’un des Pokémon se trouvant sur le Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It inflates its flotation sac, keeping its face above water in order to watch for prey movement."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84022,
				cardmarket: 279201
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84022,
				cardmarket: 279201
			}
		},
	],

}

export default card
