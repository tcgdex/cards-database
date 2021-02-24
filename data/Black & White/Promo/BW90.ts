import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Glaceon",
		fr: "Givrali",
	},
	illustrator: "Illus.＆Direc.The Pokémon Company Art Team",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		471,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
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
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
				fr: "Renvoi d'Énergie",
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de ce Pokémon vers 1 de vos Pokémon de Banc.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
