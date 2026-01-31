import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		de: "Sichlor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Leaf Ride",
				fr: "Tour de feuille",
				de: "Blattritt"
			},
			effect: {
				en: "If Scyther has any Energy attached to it, Scyther's Retreat Cost is 0.",
				fr: "Si Insécateur possède des Énergies, son Coût de Retraite est de 0.",
				de: "Wenn mindestens 1 Energie an Sichlor angelegt ist, hat Sichlor Rückzug 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
				de: "Zornklinge"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 20 more damage. If all of them are heads, this attack does 10 damage plus 40 more damage.",
				fr: "Lancez 3 pièces. Si vous obtenez une face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si vous obtenez 2 faces, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires. Si vous obtenez 3 faces cette attaque inflige 10 dégâts plus 40 dégâts supplémentaires.",
				de: "Wirf 3 Münzen. bei 3 mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 40 weitere Schadenspunkte zu. Ansonsten fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276205,
		tcgplayer: 88998
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
