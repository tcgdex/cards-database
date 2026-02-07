import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Feraligatr",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
		es: "Croconaw",
		it: "Croconaw",
		pt: "Croconaw",
		de: "Tyracroc"
	},
	stage: "Stage2",
	illustrator: "Acorviart",
	dexId: [160],

	attacks: [
		{
			cost: ["Water", "Water", "Water", "Colorless"],
			name: {
				en: "Deep Submergence",
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of " +
					"attacks done to this Pokémon."
			},
			damage: "140",
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			stamp: [{
				stamp: "illustration-contest",
				year: 2024
			}]
		},
	]
}

export default card
