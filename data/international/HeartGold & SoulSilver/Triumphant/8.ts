import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'de-de': "Gallopa"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [78],

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fiery Spirit",
				'fr-fr': "Esprit flamboyant",
				'de-de': "Flammengeist"
			},
			effect: {
				'en-us': "Rapidash can't be Confused.",
				'fr-fr': "Galopa ne peut pas être Confus.",
				'de-de': "Gallopa kann nicht verwirrt werden."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ring of Fire",
				'fr-fr': "Anneau de feu",
				'de-de': "Feuerring"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned and can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé et ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt und kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "At full gallop, its four hooves barely touch the ground because it moves so incredibly fast."
	},

	variants: [		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88587,
				cardmarket: 279538
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279538,
				tcgplayer: 88587
			}
		},
	],

}

export default card
