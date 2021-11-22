import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Palkia",
		fr: "Palkia"
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		484,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Restructure",
				fr: "Restructurer"
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent switch 1 of your Active Pokémon with 1 of your Benched Pokémon. Then, you switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. This power can't be used if Palkia is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez demander à votre adversaire d'échanger 1 de vos Pokémon Actifs avec 1 des Pokémon de votre Banc. Ensuite, vous échangez 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Ce pouvoir ne peut pas être utilisé si Palkia est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Reflect",
				fr: "Hydro-reflet"
			},
			effect: {
				en: "You may move all Energy cards attached to Palkia to your Benched Pokémon in any way you like. (Ignore this effect if you don't have any Benched Pokémon.)",
				fr: "Vous pouvez déplacer toutes les cartes Énergie attachées à Palkia sur vos Pokémon de Banc de la façon que vous voulez. (Ignorez cet effet si vous ne possédez pas de Pokémon de Banc.)"
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
