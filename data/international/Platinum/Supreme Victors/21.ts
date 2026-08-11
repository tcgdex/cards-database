import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Chimecho",
		'fr-fr': "Éoko",
		'de-de': "Palimpalim"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [358],

	hp: 70,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Heal Bell",
				'fr-fr': "Glas de soin",
				'de-de': "Vitalglocke"
			},
			effect: {
				'en-us': "Remove 3 damage counters from each of your Pokémon.",
				'fr-fr': "Retirez à chacun de vos Pokémon 3 marqueurs de dégât.",
				'de-de': "Entferne 3 Schadensmarken von jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Super Psywave",
				'fr-fr': "Super vague psy",
				'de-de': "Super-Psywelle"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. Count the amount of Energy attached to that Pokémon. Put that many damage counters on the Pokémon.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Comptabilisez le nombre d'Énergies attachées à ce Pokémon. Placez autant de marqueurs de dégât sur ce Pokémon.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Zähle die Anzahl Energien, die am gewählten Pokémon angelegt sind. Lege die gleiche Anzahl Schadensmarken auf das gewählte Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Its cries echo inside its hollow body to emerge as beautiful notes for startling and repelling foes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278712,
				tcgplayer: 84296,
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278712,
				tcgplayer: 84296
			}
		},
	],

}

export default card
