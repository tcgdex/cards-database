import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
		de: "Absol"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Quick Attack"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte",
				de: "Feint Attack"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies or any other effects on that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies or any other effects on that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276073,
		tcgplayer: 83450
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
