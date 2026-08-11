import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Golem",
		'fr-fr': "Grolem",
		'de-de': "Geowaz"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Double Throw",
				'fr-fr': "Double lancer",
				'de-de': "Doppelwurf"
			},
			effect: {
				'en-us': "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 2 des Pokémon de votre adversaire. Cette attaque leur inflige 30 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Wähle 2 Pokémon deines Gegners. Dieser Angriff fügt den gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank deines Gegners nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Megaton Rock",
				'fr-fr': "Pierre mégatonne",
				'de-de': "Megatonnen-Fels"
			},
			effect: {
				'en-us': "You may do 40 damage instead of 80 to the Defending Pokémon. If you do, during your opponent's next turn, any damage done to Golem by attacks is reduced by 40 (after applying Weakness and Resistance).",
				'fr-fr': "Vous pouvez infliger 40 dégâts au lieu de 80 au Pokémon Défenseur. Lors du prochain tour de votre adversaire, tous dégâts infligés à Grolem par des attaques sont alors réduits de 40 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Du kannst diesen Angriff dem Verteidigenden Pokémon 40 Schadenspunkte anstelle von 80 Schadenspunkten zufügen lassen. Wenn du das machst, wird während des nächsten Zuges deines Gegners Schaden, der Geowaz durch Angriffe zugefügt wird, um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
		'en-us': "It sheds its hide once a year. Its boulderlike body is so tough, even dynamite can't harm it.",
	},

	thirdParty: {
		cardmarket: 277782,
		tcgplayer: 85828
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
