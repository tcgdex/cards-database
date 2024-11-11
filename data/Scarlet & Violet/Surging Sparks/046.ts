import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Shellos",
		fr: "Sancoki",
		es: "Shellos",
		it: "Shellos",
		pt: "Shellos",
		de: "Schalellos"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Sprinkle Water",
			fr: "Eau Aspergeante",
			es: "Esparcir Agua",
			it: "Goccioline",
			pt: "Aspergir Água",
			de: "Wassersprüher"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card