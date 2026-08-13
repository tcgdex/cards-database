import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Piloswine",
		fr: "Cochignon",
		de: "Keifel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
		de: "Quiekel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nap",
				fr: "Tit'sieste",
				de: "Nickerchen"
			},
			effect: {
				en: "Remove 3 damage counters from Piloswine. If it has fewer damage counters than that, remove all of them.",
				fr: "Retirez 3 marqueurs de dégâts de Cochignon. S'il y a moins de marqueurs de dégâts sur lui, retirez-les tous.",
				de: "Entferne 3 Schadensmarken von Keifel. Falls es weniger Schadensmarken hat, entferne sie alle."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "High-Speed Charge",
				fr: "Charge bulldozer",
				de: "Sturmangriff"
			},
			effect: {
				en: "Piloswine does 30 damage to itself. Piloswine can't use this attack during your next turn.",
				fr: "Cochignon s'inflige 30 dégâts. Cochignon ne peut pas utiliser à nouveau cette attaque durant votre prochain tour.",
				de: "Keifel fügt sich selber 30 Schadenspunkte zu. Keifel kann diesen Angriff während deines nächsten Zuges nicht verwenden."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		en: "If it charges at an enemy, the hairs on its back stand up straight. It is very sensitive to sound.",
		fr: "S'il charge un ennemi, les poils de son dos se dressent à la verticale. Il est très sensible aux sons.",
		de: "Wenn es auf einen Feind losstürmt, stehen die Haare auf seinem Rücken steil ab. Es ist sehr geräuschempfindlich."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274622,
				tcgplayer: 88114
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274622,
				tcgplayer: 88114
			}
		}
	]
}

export default card

