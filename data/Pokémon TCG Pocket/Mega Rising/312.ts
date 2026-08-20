import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Meowth",
		fr: "Miaouss"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [52],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "All it does is sleep during the daytime. At night,\nit patrols its territory with its eyes aglow.",
		fr: "Il passe ses journées à dormir. La nuit venue,\\nil patrouille sur son territoire, les yeux brillants."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pay Day",
			fr: "Jackpot"
		},

		damage: 10,
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

	retreat: 1,
	boosters: ["mega-altaria"]
}

export default card