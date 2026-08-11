import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Hypno",
		'fr-fr': "Hypnomade",
		'de-de': "Hypno"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [97],

	hp: 90,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Sleep Pendulum",
				'fr-fr': "Pendulo dodo",
				'de-de': "Schlafpendel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Asleep. This power can't be used if Hypno is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Défenseur est maintenant Endormi. Ce pouvoir ne peut pas être utilisé si Hypnomade est affecté par un État spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt. Diese Poké-Power kann nicht benutzt werden, wenn Hypno von einem Speziellen Zustand betroffen ist."
			}
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
				'en-us': "Psychic Shot",
				'fr-fr': "Attaque Psy",
				'de-de': "Psychogeschoss"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à l’un des Pokémon du Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Always holding a pendulum that it swings at a steady rhythm, it causes drowsiness in anyone nearby."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86255,
				cardmarket: 278995
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86255,
				cardmarket: 278995
			}
		},
	],

}

export default card
