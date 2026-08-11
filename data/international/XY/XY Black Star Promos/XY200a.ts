import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "M Sharpedo-EX",
		'fr-fr': "M-Sharpedo-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		319,
	],
	hp: 210,
	types: [
		"Darkness",
	],
	evolveFrom: {
		'en-us': "Sharpedo-EX",
		'fr-fr': "Sharpedo-EX"
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Torpedo Dive",
				'fr-fr': "Plongeon Torpille"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Benched Pokémon for each Colorless in that Pokémon's Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire pour chaque  dans le Coût de Retraite du Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
