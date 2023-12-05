import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
		de: "Hippoterus"
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		450,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Vacuum Sand",
				fr: "Sable aspirant",
				de: "Sandsauger"
			},
			effect: {
				en: "Search your discard pile for a Fighting Energy card and attach it to Hippowdon.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie Fighting et attachez-la à Hippodocus.",
				de: "Durchsuche deinen Ablagestapel nach 1 -Energiekarte und lege sie an Hippoterus an."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Impact",
				fr: "Impact sablonneux",
				de: "Sandiger Einschlag"
			},
			effect: {
				en: "Flip a coin for each Fighting Energy attached to Hippowdon. This attack does 50 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Fighting attachée à Hippodocus. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Wirf 1 Münze für jede an Hippoterus angelegte -Energie. Dieser Angriff fügt 50 Schadenspunkte plus 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
