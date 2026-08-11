import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Wailord",
		'fr-fr': "Wailord",
		'de-de': "Wailord"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		321,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Reactive Lift",
				'fr-fr': "Ascension réactive",
				'de-de': "Reaktiver Transporter"
			},
			effect: {
				'en-us': "As long as Wailord has any React Energy cards attached to it, the Retreat Cost for each of your Water Pokémon (excluding Pokémon-ex) is 0.",
				'fr-fr': "Tant que Wailord possède des cartes Énergie réaction, le Coût de retraite de chacun de vos Pokémon  (Pokémon-ex exclus) est de 0.",
				'de-de': "Solange an Wailord mindestens eine Reaktions-Energiekarte angelegt ist, sind die Rückzugskosten deiner -Pokémon (außer Pokémon-ex) 0."
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
				'en-us': "Hypno Splash",
				'fr-fr': "Hypnoplouf",
				'de-de': "Hypnospritzer"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Rely on Friends",
				'fr-fr': "Compter sur les amis",
				'de-de': "Auf Freunde verlassen"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each of your Benched Stage 1 Evolved Pokémon.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chacun de vos Pokémon Évolués de niveau 1 sur votre Banc.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jedes entwickelte Pokémon der Phase 1 auf deiner Bank zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 4,

	thirdParty: {
		cardmarket: 276891,
		tcgplayer: 90458
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
