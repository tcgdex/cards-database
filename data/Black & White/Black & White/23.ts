import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Darumaka",
		fr: "Darumarond",
		es: "Darumaka",
		it: "Darumaka",
		pt: "Darumaka",
		de: "Flampion"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		554,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Firebreathing",
				fr: "Souffle-Feu",
				de: "Feuerhauch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 weitere Schadenspunkte zu."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Darumaka's droppings are hot, so people used to put them in their clothes to keep themselves warm.",
		de: "Früher nutzte man die heißen Ausscheidungen von Flampion, um sich den Körper zu wärmen."
	},

	thirdParty: {
		cardmarket: 279761,
		tcgplayer: 84717
	}
}

export default card
