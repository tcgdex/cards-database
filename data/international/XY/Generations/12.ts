import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "M Charizard EX",
		fr: "M-Dracaufeu-EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 220,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Typhoon",
				fr: "Typhon Ardent",
			},
			effect: {
				en: "Flip a coin for each Fire Energy attached to this Pokémon. This attack does 50 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Fire attachée à ce Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		tcgplayer: 113670
	}
}

export default card
