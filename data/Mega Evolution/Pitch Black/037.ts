import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		'es-mx': "Lampent",
		de: "Laternecto"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [608],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Litwick"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spreading Light"
		},

		cost: ["Psychic"],

		effect: {
			en: "Put up to 3 Lampent from your deck onto your Bench, then shuffle your deck."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895824,
				tcgplayer: 704794
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895824,
				tcgplayer: 704794
			}
		},
	],
}

export default card
