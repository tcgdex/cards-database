import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2014'

const card: Card = {
	dexId: [
		676,
	],
	illustrator: "5ban Graphics",
	description: {
		'en-us': "Trimming its fluffy fur not only makes it more elegant but also increases the swiftness of its movements."
	},
	set: Set,
	name: {
		'en-us': "Furfrou",
		'fr-fr': "Couafarel",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Colorless",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tight Jaw",
				'fr-fr': "Mâchoire Serrée",
			},
			damage: "20",
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc Aiguisé",
			},
			damage: "50",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [

	],
	retreat: 1,
	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281664,
				tcgplayer: 110417
			}
		}
	]
}

export default card

