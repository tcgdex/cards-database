import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Moltres & Zapdos & Articuno GX",
		fr: "Sulfura, Électhor et Artikodin-GX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 300,

	types: [
		"Colorless",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Trinity Burn",
				fr: "Règle des ESCOUADES",
			},

			damage: 210,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sky Legends GX",
				fr: "Triple Brûlure",
			},
			effect: {
				en: "Shuffle this Pokémon and all cards attached to it into your deck. If this Pokémon has at least 1 extra Fire, Water, and Lightning Energy attached to it (in addition to this attack’s cost), this attack does 110 damage to 3 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 381222
	}
}

export default card
