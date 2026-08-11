import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'de-de': "Tangoloss"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		465,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Power Whip",
				'fr-fr': "Mégafouet",
				'de-de': "Blattgeißel"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each basic Energy card attached to Tangrowth to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts pour chaque carte Énergie de base attachée à Bouldeneu. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte für jede Energie von an Tangoloss angelegten Basis-Energiekarten zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stick and Absorb",
				'fr-fr': "Colle et absorbe",
				'de-de': "Festkleben und Einsaugen"
			},
			effect: {
				'en-us': "Remove 3 damage counters from Tangrowth. The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Retirez à Bouldeneu 3 marqueurs de dégât. Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Entferne 3 Schadensmarken von Tangoloss. Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It ensnares prey by extending arms made of vines. Losing arms to predators does not trouble it.",
	},

	thirdParty: {
		cardmarket: 277912,
		tcgplayer: 89751
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
