import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Mudbray",
		fr: "Tiboudet",
		es: "Mudbray",
		it: "Mudbray",
		pt: "Mudbray"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			es: "Patada Destrucción",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			pt: "Tapa de Lama"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card