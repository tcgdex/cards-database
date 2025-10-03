import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Hippowdon 4",
		fr: "Hippodocus  Niv. 52",
		de: "Hippoterus 4"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		450,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sand Armor",
				fr: "Armure de sable",
				de: "Sandrüstung"
			},
			effect: {
				en: "If Hippowdon has any Fighting Energy attached to it, any damage done to Hippowdon by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Si  Hippodocus  possède de l'Énergie Fighting, tous dégâts qui lui sont infligés par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "Wenn an Hippoterus 4 mindestens 1 -Energie angelegt ist, wird Schaden, der Hippoterus 4 durch Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite and Crush",
				fr: "Mordre et écraser",
				de: "Beißen und Zerkleinern"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage plus 10 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
