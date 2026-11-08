import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Pidgeotto",
		'fr-fr': "Roucoups",
		'de-de': "Tauboga"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [17],

	hp: 60,

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
				'en-us': "Whirlwind",
				'fr-fr': "Cyclone",
				'de-de': "Wirbelwind"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches the Defending Pokémon with it. (Do the damage before switching the Pokémon.)",
				'fr-fr': "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange contre le Pokémon Défenseur. (Infligez les dégâts avant d'échanger les Pokémon.)",
				'de-de': "Wenn dein Gegner mindestens ein Pokémon auf der Bank hat, wählt er 1 davon und tauscht es mit dem Verteidigenden Pokémon aus. (Füge die Schadenspunkte vor dem Austauschen der Pokémon zu.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 0,
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88039,
				cardmarket: 274963
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88039,
				cardmarket: 274963
			},
		},
	],
}

export default card
