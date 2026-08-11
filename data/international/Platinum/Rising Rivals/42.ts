import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Hippowdon E4",
		'fr-fr': "Hippodocus  Niv. 52",
		'de-de': "Hippoterus 4"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [450],
	hp: 90,
	types: [
		"Fighting"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sand Armor",
				'fr-fr': "Armure de sable",
				'de-de': "Sandrüstung"
			},
			effect: {
				'en-us': "If Hippowdon E4 has any Fighting Energy attached to it, any damage done to Hippowdon E4 by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Si  Hippodocus  possède de l'Énergie Fighting, tous dégâts qui lui sont infligés par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Wenn an Hippoterus 4 mindestens 1 -Energie angelegt ist, wird Schaden, der Hippoterus 4 durch Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			}
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
				'en-us': "Bite and Crush",
				'fr-fr': "Mordre et écraser",
				'de-de': "Beißen und Zerkleinern"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
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
			type: "normal",
			thirdParty: {
				cardmarket: 278616,
				tcgplayer: 86087
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278616,
				tcgplayer: 86087
			}
		},
	],

}

export default card
