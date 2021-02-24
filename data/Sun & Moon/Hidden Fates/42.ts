import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Wigglytuff-GX",
		fr: "Grodoudou-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 210,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Rolling Rush",
				fr: "Ruée-Boulée",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 100,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Lovely Star-GX",
				fr: "Belle Étoile-GX",
			},
			effect: {
				en: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
