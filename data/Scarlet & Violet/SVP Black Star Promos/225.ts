import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu"
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "DOM",
	dexId: [25],

	attacks: [
		{
			cost: ["Lightning","Lightning","Colorless"],
			name: {
				en: "Scrappy Spark",
				fr: "Étincelle Querelleuse"
			},
			effect: {
				en:	"Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face."
			},
			damage: "30+"
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			stamp: ["worlds-2025"]
		},
		{
			type: "reverse",
			foil: "league",
			stamp: ["winner"]
		},
	]
}

export default card
