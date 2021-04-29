import { Card } from '../../../interfaces'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Random Spark",
				fr: "Étincelle Surprise",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electricannon",
				fr: "Canon Électrique",
			},
			effect: {
				en: "You may discard all Lightning Energy attached to this Pokémon. If you do, this attack does 60 more damage.",
				fr: "Vous pouvez défausser toutes les Énergies Lightning attachées à ce Pokémon. Dans ce cas, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
