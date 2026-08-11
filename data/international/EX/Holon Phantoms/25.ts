import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'de-de': "Nasgnet"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		299,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Slide",
				'fr-fr': "Éboulement",
				'de-de': "Steinhagel"
			},
			effect: {
				'en-us': "Does 10 damage to 2 of your opponent's Benched Pokémon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 2 gegnerischen Pokémon auf der Bank 10 Schadenspunkte zu (1 falls nur 1 vorhanden). (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276995,
		tcgplayer: 87800
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
