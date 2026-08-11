import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Sceptile",
		'fr-fr': "Jungko",
		'de-de': "Gewaldro"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energy Trans",
				'fr-fr': "Transfert d'énergie",
				'de-de': "Energieverteilung"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Sceptile is affected by a Special Condition.",
				'fr-fr': "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), déplacez une Énergie Grass attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Jungko est affecté par un État Spécial.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 -Energiekarte, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Gewaldro von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Leaf",
				'fr-fr': "Feuille poison",
				'de-de': "Giftiges Blatt"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slice Drain",
				'fr-fr': "Trancher jusqu'au bout",
				'de-de': "Schneidesauger"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Sceptile.",
				'fr-fr': "Retirez à Jungko jusqu'à 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Gewaldro."
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

	retreat: 1,

	thirdParty: {
		cardmarket: 278308,
		tcgplayer: 88950
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
		},
	]
}

export default card
