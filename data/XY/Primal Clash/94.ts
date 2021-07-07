import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "M Aggron EX",
		fr: "M-Galeking-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 240,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Aggron-EX",
		fr: "Galeking-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Megaton Slam",
				fr: "Écrasement Mégatonne",
			},
			effect: {
				en: "You may flip a coin. If heads, this attack does 120 more damage. If tails, this attack does 20 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez lancer une pièce. Si c'est face, cette attaque inflige 120 dégâts supplémentaires. Si c'est pile, cette attaque inflige 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: "120+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
