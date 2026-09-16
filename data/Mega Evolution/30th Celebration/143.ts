import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Kommo-o"
	},

	illustrator: "Gemi",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [784],
	hp: 180,
	types: ["Dragon"],
	stage: "Stage2",

	description: {
		en: "It bashes its scales to test its opponents' mettle. The sound of struck Kommo-o scales frightens weaker foes and sends them running."
	},

	attacks: [{
		name: {
			en: "Blazing Uppercut"
		},

		cost: ["Lightning", "Fighting", "Colorless"],

		damage: 250,
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908352
			}
		}
	],
}

export default card
