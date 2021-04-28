import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Lucario-GX",
		fr: "Lucario-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 210,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Aura Strike",
				fr: "Aura Frappante",
			},
			effect: {
				en: "If this Pokémon evolved from Riolu during this turn, this attack does 90 more damage.",
				fr: "Si ce Pokémon a évolué de Riolu pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Cyclone Kick",
				fr: "Pied Cyclone",
			},

			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cantankerous Beatdown-GX",
				fr: "Dérouillée Revêche-GX",
			},
			effect: {
				en: "This attack does 30 damage for each damage counter on this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
