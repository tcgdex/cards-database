import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Scyther ex",
		'fr-fr': "Insécateur ex",
		'de-de': "Sichlor ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [123],

	hp: 80,

	stage: "Basic",
	types: [
		"Grass"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'de-de': "Agility"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Scyther ex during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaque, y compris les dégâts, infligés à Insécateur Ex.",
				'de-de': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Scyther ex during your opponent's next turn"
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89007,
				cardmarket: 275750
			}
		}
	]
}

export default card
