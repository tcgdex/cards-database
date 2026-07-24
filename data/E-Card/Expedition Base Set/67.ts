import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Florizarre",
		de: "Bisaflor"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [190],

	hp: 50,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stretch Tail",
				fr: "Vampigraine",
				de: "Egelsamen"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si cette attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), retirez 1 marqueur de dégâts de Florizarre, s'il en possède.",
				de: "Falls dieser Angriff dem Verteidigenden Pokémon Schadenspunkte zufügt (nachdem Schwäche und Resistenz verrechnet wurden), entferne eine Schadensmarke von Bisaflor, falls es mindestens eine hat."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skedaddle",
				fr: "Attaques furieuses",
				de: "Zornschläge"
			},
			effect: {
				en: "Return Aipom and all basic Energy cards attached to it to your hand. If you have no Benched Pokémon, this attack does nothing.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90315,
				cardmarket: 274905
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
