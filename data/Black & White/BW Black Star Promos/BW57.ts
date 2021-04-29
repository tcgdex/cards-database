import { Card } from '../../../interfaces'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
	},
	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		612,
	],
	hp: 140,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Armor Press",
				fr: "Pression Cuirassée",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Dual Chop",
				fr: "Double Baffe",
			},
			effect: {
				en: "Flip 2 coins. This attack does 90 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
