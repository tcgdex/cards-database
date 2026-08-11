import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Mienshao",
		fr: "Shaofouine"
	},

	illustrator: "Shibuzoh.",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [620],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mienfoo"
	},

	description: {
		en: "When Mienshao comes across a truly challenging\nopponent, it will lighten itself by biting off the\nfur on its arms.",
		fr: "Lorsqu'il fait face à un adversaire vraiment redoutable, il coupe les poils de sa main avec les dents pour améliorer son agilité."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Low Kick",
			fr: "Balayage"
		},

		damage: 70,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card