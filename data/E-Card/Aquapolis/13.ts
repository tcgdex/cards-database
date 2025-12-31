import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		de: "Kokowei"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Exeggcute",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Big Eggsplosion",
				fr: "Grosse éclate",
				de: "Big Eggsplosion"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
				fr: "Lancez un nombre de pièces équivalent au nombre d'Énergie attachées à Noadkoko. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Flip a number of coins equal to the amount of Energy attached to Exeggutor. This attack does 20 damage times the number of heads."
			},
			damage: "20x",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lateral Eggsplosion",
				fr: "Éclate latérale",
				de: "Lateral Eggsplosion"
			},
			effect: {
				en: "Flip a number of coins equal to the total number of Energy attached to your Benched Pokémon. This attack does 30 damage plus 10 more damage for each heads.",
				fr: "Lancez un nombre de pièces égal à la quantité d'Énergie attachée à tous les Pokémon de votre Banc. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Flip a number of coins equal to the amount of Energy attached to all of your Benched Pokémon. This attack does 30 damage plus 10 more damage for each heads."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275051,
		tcgplayer: 85356
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
