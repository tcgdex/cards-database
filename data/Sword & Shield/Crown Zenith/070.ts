import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Baltoy",
		fr: "Balbuto",
		es: "Baltoy",
		it: "Baltoy",
		pt: "Baltoy",
		de: "Puppance"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Smack",
			fr: "Claque",
			es: "Palmetazo",
			it: "Schiaffo",
			pt: "Estalo",
			de: "Klatscher"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "E",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card