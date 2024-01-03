import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Wartortle",
		fr: "Carabaffe",
		de: "Schillok"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		8,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Squirtle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Doubleslap",
				fr: "Torgnoles",
				de: "Duplexhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Giant Wave",
				fr: "Vague géante",
				de: "Riesenwelle"
			},
			effect: {
				en: "Wartortle can't attack during your next turn.",
				fr: "Carabaffe ne peut pas attaquer pendant votre prochain tour.",
				de: "Schillok kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
