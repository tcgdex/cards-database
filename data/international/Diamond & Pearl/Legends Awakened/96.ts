import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'de-de': "Duflor"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Myrapla",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Powder",
				'fr-fr': "Poudre dodo",
				'de-de': "Schlafpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Frustration",
				'fr-fr': "Frustration",
				'de-de': "Frustration"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon that doesn't have any damage counters on it. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire ne possédant pas de marqueurs de dégât. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners, auf dem keine Schadensmarken liegen. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.",
		'fr-fr': "L'odeur du nectar de sa bouche est si répugnante qu'elle agresse les narines à deux kilomètres."
	},

	thirdParty: {
		cardmarket: 278245,
		tcgplayer: 85784
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
