import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Ducklett",
		'fr-fr': "Couaneton",
		'es-es': "Ducklett",
		'it-it': "Ducklett",
		'pt-br': "Ducklett",
		'de-de': "Piccolente"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		580,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Roost",
				'fr-fr': "Atterrissage",
			},
			effect: {
				'en-us': "Heal 40 damage from this Pokémon. This Pokémon can't retreat during your next turn.",
				'fr-fr': "Soignez 40 dégâts à ce Pokémon. Ce Pokémon ne peut pas battre en retraite pendant votre prochain tour.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie Éclaboussante",
			},

			damage: 20,

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

	retreat: 1,

	description: {
		'en-us': "When attacked, it uses its feathers to splash water, escaping under cover of the spray.",
	},

	thirdParty: {
		cardmarket: 279991,
		tcgplayer: 84991
	}
}

export default card
