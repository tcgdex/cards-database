import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Fennekin",
		fr: "Feunnec",
		es: "Fennekin",
		'es-mx': "Fennekin",
		de: "Fynx",
		it: "Fennekin",
		pt: "Fennekin"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [653],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			it: "Graffio",
			es: "Arañazo",
			pt: "Arranhão"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 891890
			}
		},
	],
}

export default card
