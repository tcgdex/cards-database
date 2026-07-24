import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Mankey",
		fr: "Carabaffe",
		de: "Schillok"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [56],

	hp: 40,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mug",
				fr: "Torgnoles",
				de: "Duplexhieb"
			},
			effect: {
				en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Rage",
				fr: "Vague géante",
				de: "Riesenwelle"
			},
			effect: {
				en: "This attack does 10 damage plus 10 more damage for each damage counter on Mankey.",
				fr: "Carabaffe ne peut pas attaquer pendant votre prochain tour.",
				de: "Schillok kann während deines nächsten Zuges nicht angreifen."
			},
			damage: "10+",

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
				tcgplayer: 90485,
				cardmarket: 274967
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
