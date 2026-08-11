import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "Psyduck",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [54],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ヘッドバット",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "傷",
			},
			damage: 20,
		},
	],

	retreat: 1,

};

export default card
