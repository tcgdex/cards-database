import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "マニューラ"
	},

	illustrator: "aspara",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [461],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "４～５匹の グループで 行動。 岩や 樹木に サインを 残し 連係して 獲物を 仕留める。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "きりさく"
		},

		damage: 40
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "ヘイルクロー"
		},

		damage: 70,

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のバトルポケモンをマヒにする。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card