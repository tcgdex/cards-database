import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Croagunk",
		fr: "Cradopaud",
		de: "Glibunkel",
		it: "Croagunk",
		es: "Croagunk",
		pt: "Croagunk"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Beat",
			fr: "Bataille",
			de: "Verprügler",
			it: "Battuta",
			es: "Toque",
			pt: "Pulso"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Whap Down",
			fr: "Assommer",
			de: "Verdreschen",
			it: "Bastonata",
			es: "Zurrar",
			pt: "Golpe Ligeiro"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card