import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Raticate G",
		fr: "Rattatac ",
		de: "Rattikarl G"
	},
	illustrator: "Ryota Saito",
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

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Find",
				fr: "Trouver",
				de: "Finden"
			},
			effect: {
				en: "Search your discard pile for a Trainer card or a Supporter card, show it to your opponent, and put it into your hand.",
				fr: "Choisissez dans votre pile de défausse une carte Dresseur ou une carte Supporter, montrez-la à votre adversaire et placez-la dans votre main.",
				de: "Durchsuche deinen Ablagestapel nach 1 Trainer- oder Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Biting Fang",
				fr: "Croc mordant",
				de: "Reißfänge"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
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





}

export default card
