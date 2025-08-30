import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "トロピウス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [357],
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "結実",
			},
			effect: {
				ja: "トロピウスに取り付けられた1つのエネルギーカードを別のポケモンに移動し、そのポケモンから4つのダメージカウンターを削除します（すべてが4未満の場合）。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "突風",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
