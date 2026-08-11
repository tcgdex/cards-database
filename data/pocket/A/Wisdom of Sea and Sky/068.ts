import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [180],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Mareep"
	},

	description: {
		'en-us': "As a result of storing too much electricity,\nit developed patches where even downy\nwool won't grow.",
		'fr-fr': "Il a emmagasiné tellement d'électricité que sa laine ne peut plus repousser à certains endroits de son corps."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Zap Kick",
			'fr-fr': "Coup de Pied Ravageur"
		},

		damage: 50,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card