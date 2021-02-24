import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Slice",
				fr: "Mettre en tranche",
			},
			effect: {
				en: "Raichu can't use Slice during your next turn.",
				fr: "Raichu ne peut pas utiliser Mettre en tranche lors de votre prochain tour.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Split Ball",
				fr: "Balle coupée",
			},
			effect: {
				en: "Move an Energy card attached to Raichu to 1 of your Benched Pokémon.",
				fr: "Déplacez une carte Énergie attachée à Raichu sur 1 de vos Pokémon de Banc.",
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Burst Ball",
				fr: "Balle explosive",
			},
			effect: {
				en: "Discard 3 Energy attached to any of your Pokémon in any way you like.",
				fr: "Défaussez 3 Énergies attachées à n'importe lequel de vos Pokémon de la façon que vous voulez.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
