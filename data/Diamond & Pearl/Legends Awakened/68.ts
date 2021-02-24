import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Persian",
		fr: "Persian",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Meowth",
		fr: "Mauzi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fasten Claws",
				fr: "Griffes accrochantes",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],





}

export default card
