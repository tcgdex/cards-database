import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment.",
		fr: "Ses multiples évolutions lui permettent de s'adapter à tout type de milieu naturel."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Collect",
			fr: "Collecte"
		},

		cost: ["Colorless"],

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card