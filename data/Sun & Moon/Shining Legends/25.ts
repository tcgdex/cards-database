import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		490,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blessings of the Deep",
				fr: "Bénédiction des Profondeurs",
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon that has any Water Energy attached to it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à l’un de vos Pokémon auquel de l’Énergie Water est attachée.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
