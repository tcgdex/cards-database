import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "It was recently discovered that the different varieties of Pumpkaboo vary not only in size but also in the size of the souls they collect.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886432,
				tcgplayer: 693536
			}
		},
	],

	name: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
		es: "Pumpkaboo",
		'es-mx': "Pumpkaboo",
		de: "Irrbis",
		it: "Pumpkaboo",
		pt: "Pumpkaboo"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [710],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			'es-mx': "Estampida",
			de: "Zertrampeln",
			it: "Fuggi Fuggi",
			pt: "Estouro"
		},

		cost: ["Psychic"],
		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card