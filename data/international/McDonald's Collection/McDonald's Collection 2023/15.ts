import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'it-it': "Kirlia",
		'pt-br': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [281],

	hp: 80,

	types: ["Psychic"],

	stage: "Stage1",

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'pt-br': "Ralts",
		'de-de': "Trasla"
	},

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'en-us': "Magical Shot",
				'fr-fr': "Coup Magique",
				'es-es': "Disparo Mágico",
				'it-it': "Magicolpo",
				'pt-br': "Tiro Mágico",
				'de-de': "Magischer Schuss"
			},
			damage: 30,
		},
		{
			cost: ["Psychic"],
			name: {
				'en-us': "Phychic",
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon."
			},
			damage: 20,
		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 1,
	
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725432,
				tcgplayer: 516526
			}
		}
	]
}

export default card

