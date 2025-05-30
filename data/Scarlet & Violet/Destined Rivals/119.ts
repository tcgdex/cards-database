import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Silicobra",
		fr: "Dunaja",
		de: "Salanga",
		it: "Silicobra",
		es: "Silicobra",
		pt: "Silicobra"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			de: "Lehmschelle",
			it: "Fangosberla",
			es: "Bofetón Lodo",
			pt: "Tapa de Lama"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card