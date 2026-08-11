import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoké",
		'de-de': "Woingenau"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Safeguard",
				'fr-fr': "Rune protectrice",
				'de-de': "Bodyguard"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Wobbuffet by your opponent's Pokémon-ex.",
				'fr-fr': "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Qulbutoké par les Pokémon-ex de votre adversaire.",
				'de-de': "Verhindere alle Effekte von Angriffen inklusive Schaden, die Woingenau von gegnerischen Pokémon-ex zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flip Over",
				'fr-fr': "Faire ressort",
				'de-de': "Umstoßen"
			},
			effect: {
				'en-us': "Wobbuffet does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
				'fr-fr': "Qulbutoké s'inflige 10 dégâts. Vous ne pouvez pas appliquer la Faiblesse et la Résistance à ces dégâts.",
				'de-de': "Woingenau fügt sich selbst 10 Schadenspunkte zu. Wende keine Schwäche und Resistenz bei diesem Schaden an."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277330,
		tcgplayer: 90619
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

