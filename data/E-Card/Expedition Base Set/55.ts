import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
		de: "Mew"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psywave",
				fr: "Super vague psy",
				de: "Super-Psywelle"
			},
			effect: {
				en: "Choose one of you opponent's Pokémon. Count the number of Energy cards attached to that Pokémon. Put that many damage counters on the Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Comptez le nombre de cartes Énergie attachées à ce Pokémon. Placez autant de marqueurs de dégâts sur ce Pokémon.",
				de: "Wähle 1 der Pokémon deines Gegners. Zähle die Anzahl an Energiekarten, die an dieses Pokémon angelegt sind. Lege so viele Schadensmarken auf das Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274894
	}
}

export default card
