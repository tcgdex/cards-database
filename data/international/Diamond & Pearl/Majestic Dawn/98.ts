import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Glaceon",
		'fr-fr': "Givrali",
		'de-de': "Glaziola"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		471,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Chilly Breath",
				'fr-fr': "Haleine glacée",
				'de-de': "Frostiger Atem"
			},
			effect: {
				'en-us': "As long as Glaceon is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers.",
				'fr-fr': "Tant que Givrali est votre Pokémon Actif, les Pokémon de votre adversaire ne peuvent pas utiliser de Poké-Powers.",
				'de-de': "Solange Glaziola dein Aktives Pokémon ist, können gegneriche Pokémon keine Poké-Power benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Avalanche",
				'fr-fr': "Avalanche",
				'de-de': "Lawine"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff allen Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+30"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278147,
		tcgplayer: 85750
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
