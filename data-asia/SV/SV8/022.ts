import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ソウブレイズ"
	},

	illustrator: "kantaro",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [937],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "怨念の 染みついた 古い 鎧により 進化した 姿。 容赦なく 敵を 切り刻む。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ブレイズカース"
		},

		effect: {
			ja: "相手のポケモン全員についている特殊エネルギーを、すべてトラッシュする。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "こくえんぎり"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card