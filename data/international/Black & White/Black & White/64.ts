import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'es-es': "Krokorok",
		'it-it': "Krokorok",
		'pt-br': "Krokorok",
		'de-de': "Rokkaiman"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		552,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Torment",
				'fr-fr': "Tourmente",
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Le Pokémon Défenseur ne pourra pas l'utiliser lors du prochain tour de votre adversaire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The special membrane covering its eyes can sense the heat of objects, so it can see its surroundings even in darkness.",
	},

	thirdParty: {
		cardmarket: 279802,
		tcgplayer: 86536
	}
}

export default card
