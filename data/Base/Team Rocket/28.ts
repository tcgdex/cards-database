import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Magneton",
		fr: "Magneton obscur",
		de: "Dunkles Magneton"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magnemite",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sonicboom",
				fr: "Sonicboom",
				de: "Überschallknall"
			},
			effect: {
				en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				fr: "N'appliquez pas la Faiblesse et la Résistance à cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et de la Résistance subsistent.)",
				de: "Scwäche und Resistenz für diesen Angriff nicht anwenden. (Alle anderen Auswirkungen nach der Anwendung von Schwäche und Resistenz finden immer noch statt.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Magnetic Lines",
				fr: "Lignes magnétiques",
				de: "Schlafpuder"
			},
			effect: {
				en: "If the Defending Pokémon has any basic Energy cards attached to it, choose 1 of them. If your opponent has any Benched Pokémon, choose 1 of them and attach that Energy card to it.",
				fr: "Si le Pokémon Défenseur a des cartes Énergies de base attachées à lui, choisissez l'une d'elles. Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et attachez cette carte Énergie sur lui.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Le nombre de pirates informatiques utilisant des Magneton pour endommager les systèmes augmente régulièrement."
	}
}

export default card
