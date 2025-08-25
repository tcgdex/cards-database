import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [167],
	set: Set,

	name: {
		en: "Spinarak",
		fr: "Mimigal",
		es: "Spinarak",
		it: "Spinarak",
		pt: "Spinarak",
		de: "Webarak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			es: "Picadura",
			it: "Coleomorso",
			pt: "Picada",
			de: "Käferbiss"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682042,
		tcgplayer: 451622
	}
}

export default card