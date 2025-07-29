import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Nœufnœuf",
		de: "Owei"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Continuous Eggsplosion",
				fr: "Éclate continue",
				de: "Continuous Eggsplosion"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à obtenir pile. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Flip a coin until you get tails. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Support",
				fr: "Maintien d'énergie",
				de: "Energy Support"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Energy card and attach it to one of your Benched Pokémon. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck une carte Énergie  et attachez-la à un de vos Pokémon du Banc. Mélangez ensuite votre deck.",
				de: "Flip a coin. If heads, search your deck for a  Energy card and attach it to 1 of your Benched Pokémon. Shuffle your deck afterward."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275150
	}
}

export default card
