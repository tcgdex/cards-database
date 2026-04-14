import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Piplup",
		fr: "Tiplouf",
		de: "Plinfa",
		it: "Piplup",
		es: "Piplup",
		pt: "Piplup",
		'es-mx': "Piplup"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [393],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Peck",
			fr: "Picpic",
			de: "Pikser",
			it: "Beccata",
			es: "Picotazo",
			pt: "Bicada",
			'es-mx': "Picotazo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		cardmarket: 875191
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
