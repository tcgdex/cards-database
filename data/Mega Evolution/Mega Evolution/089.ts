import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Nickit",
		fr: "Goupilou",
		de: "Kleptifux",
		it: "Nickit",
		es: "Nickit",
		pt: "Nickit",
		'es-mx': "Nickit"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [827],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			de: "Fänge der Dunkelheit",
			it: "Oscurizanna",
			es: "Colmillo de Oscuridad",
			pt: "Presa Sombria",
			'es-mx': "Colmillo de Oscuridad"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851160,
				tcgplayer: 654428
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851160,
				tcgplayer: 654428
			}
		},
	],
}

export default card
