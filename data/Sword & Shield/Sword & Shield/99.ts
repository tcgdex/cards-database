import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 190,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-Pierre",
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 90,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bedrock Shake",
				fr: "Secousse Tectonique",
			},
			effect: {
				en: "This attack also does 60 damage to each Benched Pokémon that has any damage counters on it (both yours and your opponent's). (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 60 dégâts à chacun des Pokémon de Banc ayant au moins un marqueur de dégâts (les vôtres et ceux de votre adversaire). (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
