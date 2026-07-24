import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Nidorino",
		fr: "Mew",
		de: "Mew"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [33],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Horn",
				fr: "Super vague psy",
				de: "Super-Psywelle"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
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
			type: "normal",
			thirdParty: {
				tcgplayer: 87398,
				cardmarket: 274894
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
