import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
		de: "Woingenau"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Friends",
				fr: "À la rescousse!",
				de: "Freundesruf"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Retaliate",
				fr: "Représailles",
				de: "Vergeltung"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Wobbuffet.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Qulbutoké.",
				de: "Dieser Angriff fügt für jede Schadensmarke auf Woingenau 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277026,
		tcgplayer: 90617
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
