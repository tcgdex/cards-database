import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡璞・蝶蝶",
		'zh-cn': "卡璞・蝶蝶",
		ja: "カプ・テテフ"
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "四處翩翩飛舞， 撒下閃著不可思議光芒的鱗粉。 據說碰到的人眨眼間就會恢復活力。",
		'zh-cn': "四處翩翩飛舞， 撒下閃著不可思議光芒的鱗粉。 據說碰到的人眨眼間就會恢復活力。",
		ja: "ヒラヒラ 飛びまわり 不思議に 光る 鱗粉を 振りまく。 触れた者は たちまち 元気を 取り戻すという。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蠱惑",
			'zh-cn': "蠱惑",
			ja: "まどわす"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。",
			ja: "相手のバトルポケモンをこんらんにする。"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "心靈粉碎",
			'zh-cn': "心靈粉碎",
			ja: "メンタルクラッシュ"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【混亂】，則增加90點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢【混亂】，則增加90點傷害。",
			ja: "相手のバトルポケモンがこんらんなら、90ダメージ追加。"
		},

		damage: "90＋",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [786],

	thirdParty: {
		cardmarket: 787581
	}
}

export default card