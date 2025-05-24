import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>臭臭泥",
		'zh-cn': "<火箭隊的>臭臭泥",
		ja: "ロケット団のベトベトン"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	description: {
		'zh-tw': "全身上下沾滿污泥。 光是碰到牠的足跡， 都會受到毒素的侵襲。",
		'zh-cn': "全身上下沾滿污泥。 光是碰到牠的足跡， 都會受到毒素的侵襲。",
		ja: "汚い ヘドロが 全身に まとわりつく。 足跡に 触っただけで 毒に 侵される。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "渾身臭臭",
			'zh-cn': "渾身臭臭",
			ja: "ベトベトまみれ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			ja: "相手のバトルポケモンをこんらんにする。次の相手の番、このワザを受けたポケモンは、にげられない。"
		},

		damage: 40,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "毒液危害",
			'zh-cn': "毒液危害",
			ja: "ベノムハザード"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢處於特殊狀態的數量×100點傷害。",
			'zh-cn': "造成對手的戰鬥寶可夢處於特殊狀態的數量×100點傷害。",
			ja: "相手のバトルポケモンが受けている特殊状態の数×100ダメージ。"
		},

		damage: "100×",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [89]
}

export default card