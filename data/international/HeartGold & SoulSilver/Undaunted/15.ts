import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Honchkrow",
		'fr-fr': "Corboss",
		'de-de': "Kramshef"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [430],

	hp: 90,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Murkrow",
		'fr-fr': "Cornebre"
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
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec l’un des Pokémon de son Banc.",
				'de-de': "Der Gegner tauscht das Verteidigende Pokémon mit einem Pokémon auf seiner Bank aus."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Blindside",
				'fr-fr': "Angle mort",
				'de-de': "Aus heiterem Himmel"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 50 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez l’un des Pokémon de votre adversaire ayant des marqueurs de dégât. Cette attaque inflige 50 dégâts à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt. Dieser Angriff fügt dem gewählten Pokémon 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is merciless by nature. It is said that it never forgives the mistakes of its Murkrow followers."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279268,
				tcgplayer: 86161
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279268,
				tcgplayer: 86161
			}
		}
	],

}

export default card
