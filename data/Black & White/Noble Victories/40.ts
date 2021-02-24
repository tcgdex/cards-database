import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		603,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dynamotor",
				fr: "Dynamoteur",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Lightning de votre pile de défausse à 1 de vos Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
