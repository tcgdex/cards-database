import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [276],
	set: Set,

	name: {
		en: "Taillow",
		fr: "Nirondelle",
		de: "Schwalbini",
		it: "Taillow",
		es: "Taillow",
		pt: "Taillow",
		'es-mx': "Taillow"
	},


	illustrator: "Ayako Ozaki",

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			de: "Flügelschlag",
			it: "Attacco d'Ala",
			es: "Ataque Ala",
			pt: "Ataque de Asa",
			'es-mx': "Ataque de Ala"
		},

		damage: 20
	}],

	retreat: 1,
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
		cardmarket: 826030
	}
}

export default card
