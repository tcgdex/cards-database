import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Totodile",
		fr: "Kaiminus",
		de: "Karnimani"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		158,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Totodile but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie {W} attachée à Kaiminus en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Karnimani angelegte {W}-Energie, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wird, zu. Du kannst auf diese Weise höchstens 20 weitere Schadenspunkte zufügen."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Its highly developed jaws are powerful enough to crush anything. Even experienced adult trainers must handle it with great caution.",
		fr: "Ses mâchoires surdéveloppées sont assez puissantes pour écraser n'importe quoi. Même les dresseurs adultes les plus expérimentés font très attention.",
		de: "Seine hoch entwickelten Kiefer sind kräftig genug, um alles zu zermalmen. Selbst erfahrene Trainer müssen große Vorsicht walten lassen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274737,
				tcgplayer: 89993
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274737,
				tcgplayer: 89993
			}
		}
	]
}

export default card
