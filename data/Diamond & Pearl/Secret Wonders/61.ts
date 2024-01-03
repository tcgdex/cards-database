import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
		de: "Rattikarl"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw Off",
				fr: "Ronger jusqu'au bout",
				de: "Abnagen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 60 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 60 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 60 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sucker Punch",
				fr: "Coup Bas",
				de: "Tiefschlag"
			},
			effect: {
				en: "If Raticate has any Darkness Energy attached to it, this attack does 20 damage plus 20 more damage.",
				fr: "Si Rattatac possède de l'Énergie Darkness, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn an Rattikarl mindestens 1 -Energie angelegt ist, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],





}

export default card
