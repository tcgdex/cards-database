import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Gardevoir δ",
		'fr-fr': "Gardevoir δ",
		'de-de': "Guardevoir"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 100,

	types: [
		"Psychic",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energy Jump",
				'fr-fr': "Saute énergie",
				'de-de': "Energiesprung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move an Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Energiekarte, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, falls Guardevoir von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Metal",
			],
			name: {
				'en-us': "Psychic Rage",
				'fr-fr': "Frénésie psychique",
				'de-de': "Psychoraserei"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each damage counter on Gardevoir to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Gardevoir. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle ein Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte für jede Schadensmarke auf Guardevoir zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Psychic",
			],
			name: {
				'en-us': "Black Magic",
				'fr-fr': "Magie noire",
				'de-de': "Schwarze Magie"
			},
			effect: {
				'en-us': "Does 10 damage plus 20 more damage times the number of your opponent's Benched Pokémon.",
				'fr-fr': "Inflige 10 dégâts plus 20 dégâts supplémentaires multipliés par le nombre de Pokémon sur le Banc de votre adversaire.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte plus 20 Schadenspunkte mal der Anzahl der Pokémon auf der Bank deines Gegners zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 276769
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
