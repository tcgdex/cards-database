import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [739],
	set: Set,

	name: {
		fr: "Crabagarre",
		en: "Crabrawler",
		es: "Crabrawler",
		it: "Crabrawler",
		pt: "Crabrawler",
		de: "Krabbox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			fr: "Coud'Phalange",
			en: "Knuckle Punch",
			es: "Puño con Nudillos",
			it: "Noccapugno",
			pt: "Soco com Punho",
			de: "Knöchelhieb"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			fr: "Poing Magnum",
			en: "Magnum Punch",
			es: "Puño Mágnum",
			it: "Superpugno",
			pt: "Soco Magnum",
			de: "Magnum-Schlag"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card