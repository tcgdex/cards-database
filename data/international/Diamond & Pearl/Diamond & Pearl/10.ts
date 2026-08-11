import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Mismagius",
		'fr-fr': "Magirêve",
		'de-de': "Traunmagil"
	},

	illustrator: "Mikiko Takeda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		429,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Avenge",
				'fr-fr': "Venger",
				'de-de': "Abrechnen"
			},
			effect: {
				'en-us': "Count the number of your Pokémon that have any damage counters on them. Put that many damage counters on the Defending Pokémon.",
				'fr-fr': "Comptabilisez le nombre de vos Pokémon possédant des marqueurs de dégât. Placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
				'de-de': "Zähle die anzahl deiner Pokémon, auf denen Schadensmarken liegen. Lege die gleiche Anzahl Schadensmarken auf das Verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psywave",
				'fr-fr': "Vague psy",
				'de-de': "Psywelle"
			},
			effect: {
				'en-us': "Does 30 damage plus 20 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede Energie, die am Verteidigenden Pokémon angelegt ist, zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its cries sound like incantations. Those hearing it are tormented by headaches and hallucinations.",
	},

	thirdParty: {
		cardmarket: 277509,
		tcgplayer: 87514
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse"
		}
	]
}

export default card
