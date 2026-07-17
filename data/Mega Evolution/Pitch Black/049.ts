import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Its healthy appetite leads to visible growth spurts. It often has to replace the bones it wears as its size increases."
	},

	name: {
		en: "Vullaby",
		fr: "Vostourno",
		es: "Vullaby",
		'es-mx': "Vullaby",
		de: "Skallyk"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [629],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Flap"
		},

		cost: ["Darkness"],

		damage: 10
	}, {
		name: {
			en: "Gust"
		},

		cost: ["Darkness", "Colorless"],

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
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
				cardmarket: 895834,
				tcgplayer: 704806
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895834,
				tcgplayer: 704806
			}
		},
	],
}

export default card
