import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Gastrodon West Sea",
		'fr-fr': "Tritosor Mer Occident",
		'de-de': "Gastrodon Westliches Meer"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		423,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Shellos West Sea",
		'fr-fr': "Sancoki Mer Occident",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Raging Flood",
				'fr-fr': "Inondation en furie",
				'de-de': "Tobende Flut"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each damage counter on Gastrodon West Sea. Then, remove 2 damage counters from Gastrodon West Sea.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Tritosor Mer Occident. Ensuite, retirez à Tritosor Mer Occident\n 2 marqueurs de dégât.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Gastrodon Westliches Meer zu. Danach entferne 2 Schadensmarken von Gastrodon Westliches Meer."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wild Waves",
				'fr-fr': "Vagues énormes",
				'de-de': "Stürmische Wellen"
			},
			effect: {
				'en-us': "Put 1 damage counter on each Benched Pokémon (both yours and your opponent's).",
				'fr-fr': "Placez 1 marqueur de dégât sur chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire).",
				'de-de': "Lege 1 Schadensmarke auf jedes Pokémon auf der Bank (deine und die deines Gegners)."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It has a pliable body without any bones. If any part of its body is torn off, it grows right back.",
	},

	thirdParty: {
		cardmarket: 277762,
		tcgplayer: 85659
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
