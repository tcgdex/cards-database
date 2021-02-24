import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		695,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Raging Thunder",
				fr: "Tonnerre Déchaîné",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
