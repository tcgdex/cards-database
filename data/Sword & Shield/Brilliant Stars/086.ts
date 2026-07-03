import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel",
		de: "Sniebel"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			de: "Schlitzer"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "Its paws conceal sharp claws. If attacked, it suddenly extends the claws and startles its enemy.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608536,
				tcgplayer: 263802
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608536,
				tcgplayer: 263802
			}
		},
	],
}

export default card
