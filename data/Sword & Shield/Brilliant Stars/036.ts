import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [394],
	set: Set,

	name: {
		en: "Prinplup",
		fr: "Prinplouf",
		es: "Prinplup",
		it: "Prinplup",
		pt: "Prinplup",
		de: "Pliprin"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Piplup",
		fr: "Tiplouf",
		es: "Piplup",
		it: "Piplup",
		pt: "Piplup",
		de: "Plinfa"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "It lives a solitary life. Its wings deliver wicked blows that can snap even the thickest of trees.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608486,
				tcgplayer: 263735
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608486,
				tcgplayer: 263735
			}
		},
	],
}

export default card
