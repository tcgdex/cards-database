import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
		'de-de': "Knarksel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [444],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Gible",
		'fr-fr': "Griknot"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Healing Scale",
				'fr-fr': "Écaille guérisseuse",
				'de-de': "Heilschuppe"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Pokémon.",
				'fr-fr': "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
				'de-de': "Entferne 1 Schadensmarke von jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sand Tomb",
				'fr-fr': "Tombe de sable",
				'de-de': "Sandgrab"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It loves sparkly things. It seeks treasures in caves and hoards the loot in its nest."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85599,
				cardmarket: 449558
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278750,
				tcgplayer: 85599
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 278750,
				tcgplayer: 164202
			}
		},
		{
			type: "reverse",
			foil: "league",
			stamp: ["staff"],
			thirdParty: {
				cardmarket: 278750,
				tcgplayer: 164203
			}
		},
	],

}

export default card
