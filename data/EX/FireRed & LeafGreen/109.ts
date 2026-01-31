import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Gyarados ex",
		fr: "Léviator ex",
		de: "Garados ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Twister",
				fr: "Ouragan",
				de: "Twister"
			},
			effect: {
				en: "Flip 2 coins. For each heads, choose 1 Energy attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Pour chaque face, choisissez 1 Énergie attachée au Pokémon Défenseur et défaussez-la. Si vous obtenez 2 piles, cette attaque est sans effet.",
				de: "Flip 2 coins. For each heads, choose 1 Energy attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Rage",
				fr: "Draco-rage",
				de: "Dragon Rage"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 276285,
		tcgplayer: 86004
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
