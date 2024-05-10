import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ホイーガ",
		'zh-tw': "車輪毬"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Krgc",
	dexId: [544],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "高速で 回転し 相手に 突撃。 最高時速は およそ １００キロに 達する。",
		'zh-tw': "會高速旋轉去突擊對手。 牠的最高時速可以達到 大約１００公里。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ポイズンサークル",
			'zh-tw': "毒陣"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "かいてんアタック",
			'zh-tw': "迴轉攻擊"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card