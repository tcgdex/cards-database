import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "Wooper -027/092",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [194],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "バブル",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "波のスプラッシュ",
			},
			damage: 20,
		},
	],

	retreat: 1,

};

export default card
