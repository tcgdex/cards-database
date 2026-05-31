import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Litleo",
		fr: "Hélionceau",
		es: "Litleo",
		'es-mx': "Litleo",
		de: "Leufeo",
		it: "Litleo",
		pt: "Litleo"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [667],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			'es-mx': "Tacleada",
			de: "Tackle",
			it: "Azione",
			pt: "Investida"
		},

		cost: ["Colorless"],
		damage: 10
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693505,
		cardmarket: 886406
	}
}

export default card