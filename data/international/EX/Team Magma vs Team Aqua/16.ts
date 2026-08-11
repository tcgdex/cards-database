import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Sealeo",
		'fr-fr': "Phogleur de Team Aqua",
		'de-de': "Team Aquas Seejong"
	},

	illustrator: "T. Honda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [364],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Aqua Trance",
				'fr-fr': "Aqua-transe",
				'de-de': "Aqua Trance"
			},
			effect: {
				'en-us': "At the end of your opponent's next turn, the Defending Pokémon is now Asleep.",
				'fr-fr': "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est Endormi.",
				'de-de': "At the end of your opponent's next turn, the Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Super Hypnoblast",
				'fr-fr': "Super hypno-rafale",
				'de-de': "Super Hypnoblast"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Asleep, this attack does 30 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est Endormi, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is Asleep, this attack does 30 damage plus 20 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275793,
				tcgplayer: 89796
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275793,
				tcgplayer: 89796
			}
		},
	],

}

export default card
