import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [492],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Flower Aroma",
				'fr-fr': "Arôme floral",
				'de-de': "Flower Aroma"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Shaymin. The Defending Pokémon is now Asleep.",
				'fr-fr': "Retirez à Shaymin 2 marqueurs de dégât. Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Remove 2 damge counters from Shaymin. The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Damage Aid",
				'fr-fr': "Aide aux dégâts",
				'de-de': "Damage Aid"
			},
			effect: {
				'en-us': "If the Defending Pokémon is affected by a Special Condition, this attack does 30 damage plus 50 more damage. Then, remove all Special Conditions from the Defending Pokémon.",
				'fr-fr': "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires. Ensuite, retirez au Pokémon Défenseur tous ses États Spéciaux.",
				'de-de': "If the Defending Pokémon is affected by a Special Condition, this attack does 30 damage plus 50 more damage. Then, remove all Special Conditions from the Defending Pokémon."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in flower patches and avoids detection by curling up to look like a flowering plant."
	},

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 89108,
				cardmarket: 278435
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278435,
				tcgplayer: 89108
			}
		}
	],

}

export default card
