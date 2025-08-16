import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
		de: "Digda"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Dig Under",
				fr: "Terrassement",
				de: "Schaufel unter"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after Applying Weakness and Resistance still happen.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque inflige 10 dégâts à ce Pokémon. N'appliquez pas la Faiblesse et la Résistance. (Tous les autres effets ayant lieu après application de la Faiblesse et de la Résistance subsistent.)",
				de: "Wähle ein Pokémon deines gegners. Dieser Angriff fügt diesem Pokémon 10 Schadenspunkte zu, aber ein kann uns keiner. Schwäche und Resistenz für diesen Angriff nicht anwenden. (Alle anderen Auswirkungen nach der Anwendung von Schwäche und resistenz finden immer noch statt.)"
			}

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Il suit les Onix dans leurs tunnels, à la recherche des restes de nourriture qu'ils ont laissé derrière eux."
	},

	thirdParty: {
		cardmarket: 274105,
		tcgplayer: 84819
	}
}

export default card
