import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Vikavolt"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		en: "Charjabug"
	},

	description: {
		en: "It builds up electricity in its abdomen, focuses it through its jaws, and then fires the electricity off in concentrated beams."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Disconnect"
		},

		damage: 70,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card