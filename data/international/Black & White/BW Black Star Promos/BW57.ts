import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Haxorus",
		'fr-fr': "Tranchodon",
	},
	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		612,
	],
	hp: 140,
	types: [
		"Dragon",
	],
	evolveFrom: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Armor Press",
				'fr-fr': "Pression Cuirassée",
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Dual Chop",
				'fr-fr': "Double Baffe",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 90 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 90 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,




	description: {
		'en-us': "Their sturdy tusks will stay sharp even if used to cut steel beams. These Pokémon are covered in hard armor.",
	},
}

export default card
