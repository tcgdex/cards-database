import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [974],
	set: Set,

	name: {
		en: "Cetoddle",
		fr: "Piétacé",
		de: "Flaniwal",
		it: "Cetoddle",
		es: "Cetoddle",
		pt: "Cetoddle",
		'es-mx': "Cetoddle"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			es: "Bofetada Gentil",
			pt: "Tapinha",
			'es-mx': "Cachetadita"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			en: "Frost Smash",
			fr: "Impact Glacial",
			de: "Frostschlag",
			it: "Gelocolpo",
			es: "Golpe Gélido",
			pt: "Pancada Congelada",
			'es-mx': "Golpazo Gélido"
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825938
	}
}

export default card
