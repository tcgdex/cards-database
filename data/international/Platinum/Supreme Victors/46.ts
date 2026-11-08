import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Spinda",
		'fr-fr': "Spinda",
		'de-de': "Pandir"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [327],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Synchro Removal",
				'fr-fr': "Enlèvement synchronisé",
				'de-de': "Synchro-Entferner"
			},
			effect: {
				'en-us': "If any Energy card attached to Spinda is the same type as any Energy card attached to the Defending Pokémon, discard 1 of those Energy cards from the Defending Pokémon.",
				'fr-fr': "Si une carte Énergie attachée à Spinda est du même type que n'importe quelle carte Énergie attachée au Pokémon Défenseur, défaussez 1 de ces cartes Énergie attachées au Pokémon Défenseur.",
				'de-de': "Wenn an Pandir mindestens 1 Energiekarte desselben Typs wie eine an das Verteidigende Pokémon angelegte Energiekarte angelegt ist, entferne 1 von diesen Energiekarten vom Verteidigenden Pokémon und lege sie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pulled Punch",
				'fr-fr': "Poing doux",
				'de-de': "Verhaltener Schlag"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 10 instead of 30.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, les dégâts de base de cette attaque sont de 10 au lieu de 30.",
				'de-de': "Wenn auf dem Verteidigenden Pokémon bereits mindestens 1 Schadensmarke liegt, beträgt der Grundschaden dieses Angriffs 10 Schadenspunkte anstelle von 30 Schadenspunkten."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "No two Spinda have the same pattern of spots. Its tottering step fouls the aim of foes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89463,
				cardmarket: 278737
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278737,
				tcgplayer: 89463
			}
		},
	],

}

export default card
