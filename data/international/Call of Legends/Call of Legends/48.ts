import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Pidgeotto",
		'fr-fr': "Roucoups",
		'de-de': "Tauboga"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [17],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Pidgey",
		'fr-fr': "Roucool"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'de-de': "Windstoß"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Twister",
				'fr-fr': "Ouragan",
				'de-de': "Windhose"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez deux fois un côté pile, cette attaque ne fait rien. Pour chaque face, défaussez une Énergie au Pokémon Défenseur.",
				'de-de': "Wirf 2 Münzen. Wenn beide Münzen \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen. Lege pro \"Kopf\" eine Energie, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It renders its prey immobile using well-developed claws, then carries the prey more than 60 miles to its nest.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88043,
				cardmarket: 279691
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88043,
				cardmarket: 279691
			},
		},
	],

}

export default card
