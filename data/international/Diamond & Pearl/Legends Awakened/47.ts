import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Camerupt",
		'fr-fr': "Camerupt",
		'de-de': "Camerupt"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Numel",
		'fr-fr': "Camaub",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Eruption",
				'fr-fr': "Éruption",
				'de-de': "Eruption"
			},
			effect: {
				'en-us': "Each player discards the top card of his or her deck. This attack does 30 damage plus 30 more damage for each Energy card discarded in this way.",
				'fr-fr': "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				'de-de': "Jeder Spieler legt die oberste Karte seines Decks auf seinen Ablagestapel. Dieser Angriff fügt 30 Schadenspunkte plus 30 weitere Schadenspunkte für jede Energiekarte, die auf diese Weise auf den Ablagestapel gelegt wurde, zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Camerupt does 20 damage to itself.",
				'fr-fr': "Camerupt s'inflige 20 dégâts.",
				'de-de': "Camerupt fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has volcanoes on its back. If magma builds up in its body, it shudders, then erupts violently.",
		'fr-fr': "Il porte des volcans sur son dos. Quand le magma remonte, il frissonne et entre en éruption."
	},

	thirdParty: {
		cardmarket: 278196,
		tcgplayer: 84093
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
