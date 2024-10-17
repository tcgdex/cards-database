import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ジバコイル"
	},

	illustrator: "Po-Suzuki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [462],
	hp: 170,
	types: ["Lightning"],

	description: {
		ja: "特殊な 磁場で レアコイルの 分子 構造が 組み換えられて ジバコイルに 進化した。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "きょうりょくじば"
		},

		damage: 80,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "でんじほう"
		},

		damage: 180,

		effect: {
			ja: "次の自分の番、このポケモンは「でんじほう」が使えない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card