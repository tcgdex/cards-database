import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Sharpedo-EX",
		fr: "M-Sharpedo-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
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
		en: "Sharpedo-EX",
		fr: "Sharpedo-EX"
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
				en: "Torpedo Dive",
				fr: "Plongeon Torpille"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon for each Colorless in that Pokémon's Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire pour chaque  dans le Coût de Retraite du Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
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
