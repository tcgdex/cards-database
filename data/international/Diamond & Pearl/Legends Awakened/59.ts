import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Lampi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Energy Split",
				'fr-fr': "Séparation d'Énergie",
				'de-de': "Energie-Spaltung"
			},
			effect: {
				'en-us': "This attack does 30 damage to each of your opponent's Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire possédant des cartes Énergie. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt allen Pokémon deines Gegners, an denen mindestens 1 Energiekarte angelegt ist, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Bolt",
				'fr-fr': "Aqua-boulon",
				'de-de': "Aquaschuss"
			},
			effect: {
				'en-us': "Does 60 damage plus 10 more damage for each Water Energy attached to Lanturn.",
				'fr-fr': "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Water attachée à Lanturn.",
				'de-de': "Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Lanturn angelegte -Energie zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Lanturn's light can shine up from great depths. It is nicknamed \"The Deep-Sea Star.\"",
		'fr-fr': "La lumière de LANTURN surgit des profondeurs. On le surnomme \"étoile des profondeurs\"."
	},

	thirdParty: {
		cardmarket: 278207,
		tcgplayer: 86609
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
