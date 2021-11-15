import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Jigglypuff",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Assistance",
				fr: "Assistance"
			},
			effect: {
				en: "Once during your turn (before your attack), if Wigglytuff is on your Bench, you may choose 1 of your Active Pokémon and remove 1 Special Condition from it.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Grodoudou est sur votre Banc, vous pouvez choisir 1 de vos Pokémon Actifs et lui retirer 1 État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Expand",
				fr: "Pousstoidla"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Wigglytuff by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, les dégâts infligés à Grodoudou par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance)."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
