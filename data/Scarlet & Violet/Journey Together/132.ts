import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		en: "Greedent",
		fr: "Rongrigou",
		es: "Greedent",
		de: "Schlaraffel",
		it: "Greedent",
		pt: "Greedent",
		'es-mx': "Greedent"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	evolveFrom: {
		en: "Skwovet",
		fr: "Rongourmand",
		es: "Skwovet",
		de: "Raffel",
		it: "Skwovet",
		pt: "Skwovet",
		'es-mx': "Skwovet"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gluttonous Tail",
			fr: "Queue Gourmande",
			es: "Cola Codiciosa",
			de: "Gefräßiger Schweif",
			it: "Coda Vorace",
			pt: "Cauda Gulosa",
			'es-mx': "Cola Glotona"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			'es-mx': "Roba 2 cartas."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "Jerky",

	thirdParty: {
		cardmarket: 817284
	},

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
