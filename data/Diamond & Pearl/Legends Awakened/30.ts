import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Heatran",
		fr: "Heatran",
		de: "Heatran"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 100,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Smelt",
				fr: "Fondre",
				de: "Einschmelzen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move a Metal Energy attached to 1 of your Pokémon to Heatran. This power can't be used if Heatran is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer sur Heatran une Énergie Metal attachée à 1 de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Heatran est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 -Energie, die an 1 deiner Pokémon angelegt ist, an Heatran anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Heatran von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Metal",
				fr: "Heavy Métal",
				de: "Schwermetall"
			},
			effect: {
				en: "Flip a coin for each Metal Energy attached to Heatran. This attack does 40 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Metal attachée à Heatran. Cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Wirf 1 Münze für jede an Heatran angelegte -Energie. Dieser Angriff fügt 40 Schadenspunkte plus 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		fr: "Il hante les grottes volcaniques. Il rampe au mut et au plafond grâce à ses pieds en forme de croix."
	}
}

export default card
