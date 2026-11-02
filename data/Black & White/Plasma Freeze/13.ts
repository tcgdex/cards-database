import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Heatran-EX",
		fr: "Heatran-EX",
		es: "Heatran-EX",
		it: "Heatran-EX",
		pt: "Heatran-EX",
		de: "Heatran-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		485,
	],
	hp: 180,
	types: [
		"Fire",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Boiler",
				fr: "Coup de Chaud",
				de: "Hitzekessel"
			},
			effect: {
				en: "If this Pokémon is affected by a Special Condition, this attack does 60 more damage.",
				fr: "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires.",
				de: "Wenn dieses Pokémon von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dynamite Press",
				fr: "Pression Explosive",
				de: "Dynamitdruck"
			},
			effect: {
				en: "If this Pokémon has any Plasma Energy attached to it, this attack does 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Si de l'Énergie Plasma est attachée à ce Pokémon, cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
				de: "Wenn an dieses Pokémon bereits Plasma-Energie angelegt ist, fügt dieser Angriff 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
