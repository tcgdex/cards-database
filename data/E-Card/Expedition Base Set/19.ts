import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Mew",
		de: "Mew"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [230],

	hp: 120,

	types: [
		"Water"
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
	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Rapids",
				fr: "Super vague psy",
				de: "Super-Psywelle"
			},
			effect: {
				en: "Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon, if any.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Comptez le nombre de cartes Énergie attachées à ce Pokémon. Placez autant de marqueurs de dégâts sur ce Pokémon.",
				de: "Wähle 1 der Pokémon deines Gegners. Zähle die Anzahl an Energiekarten, die an dieses Pokémon angelegt sind. Lege so viele Schadensmarken auf das Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 3,


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
		}
	],
}

export default card
