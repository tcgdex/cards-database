import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		494,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Victory Star",
				fr: "Victorieux",
			},
			effect: {
				en: "Once during your turn, after you flip any coins for an attack, you may ignore all results of those coin flips and begin flipping those coins again. You can't use more than 1 Victory Star Ability each turn.",
				fr: "Une seule fois pendant votre tour, après avoir lancé des pièces pour une attaque, vous pouvez ignorer le résultat de ces lancers de pièce et lancer ces pièces à nouveau. Vous ne pouvez utiliser plus d’un talent Victorieux par tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "V-Flame",
				fr: "V-Flamme",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
