import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

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

	thirdParty: {
		tcgplayer: 693536
	}
}

export default card