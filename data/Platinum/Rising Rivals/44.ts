import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Lairon",
		fr: "Galegon Niv. 37",
		de: "Stollrak"
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		305,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Aron",
		fr: "Galekid",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Metal",
				fr: "Heavy Métal",
				de: "Schwermetall"
			},
			effect: {
				en: "Flip a coin for each Metal Energy attached to Lairon. This attack does 10 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Metal attachée à Galegon. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Wirf 1 Münze für jede an Stollrak angelegte -Energie. Dieser Angriff fügt 10 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Granite Head",
				fr: "Tête de granit",
				de: "Granitkopf"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Lairon by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Galegon par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Stollrak durch Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
