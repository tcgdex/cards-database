import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Terracool",
		en: "Toedscool",
		es: "Toedscool",
		it: "Toedscool",
		pt: "Toedscool",
		de: "Tentagra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Coud'Pattes",
			en: "Smash Kick",
			es: "Patada Destrucción",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso",
			de: "Schmetterkick"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Coud'Boue",
			en: "Mud-Slap",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			pt: "Tapa de Lama",
			de: "Lehmschelle"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Oswaldo KATO",

	thirdParty: {
		cardmarket: 725198
	}
}

export default card