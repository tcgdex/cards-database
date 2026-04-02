import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Rowlet",
		fr: "Brindibou",
		de: "Bauz",
		it: "Rowlet",
		es: "Rowlet",
		pt: "Rowlet",
		'es-mx': "Rowlet"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [722],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			es: "Placaje",
			pt: "Investida",
			'es-mx': "Tacleada"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		cardmarket: 875192
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
