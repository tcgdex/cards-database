import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
		de: "Mew"
	},

	illustrator: "Ken Sugimori",
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
				en: "Choose 1 of your opponent's Pokémon. Count the amount of Energy attached to that Pokémon. Put that many damage counters on the Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Comptabilisez le nombre d'Énergies attachées à ce Pokémon. Placez autant de marqueurs de dégât sur ce Pokémon.",
				de: "Wähle 1 Pokémon deines Gegners. Zähle die Anzahl der Energie, die an dieses Pokémon angelegt sind. Lege dann die gleiche Anzahl Schadensmarken auf dieses Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276994,
		tcgplayer: 87400
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "normal"
		}
	]
}

export default card
