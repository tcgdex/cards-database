import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
		de: "Mew"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [151],

	hp: 50,

	types: [
		"Psychic"
	],

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Water Cyclone",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Water Energy card from your Active Pokémon to 1 of your Benched Pokémon. This power can't be used if Kingdra is affected by a Special Condition.",
			},
		},
	],,
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
				en: "Choose 1 of your opponent's Pokémon. Count the number of Energy cards attached to that Pokémon. Put that many damage counters on the Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Comptez le nombre de cartes Énergie attachées à ce Pokémon. Placez autant de marqueurs de dégâts sur ce Pokémon.",
				de: "Wähle 1 der Pokémon deines Gegners. Zähle die Anzahl an Energiekarten, die an dieses Pokémon angelegt sind. Lege so viele Schadensmarken auf das Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87396,
				cardmarket: 274894
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87396,
				cardmarket: 274894
			},
		},
	],
}

export default card
