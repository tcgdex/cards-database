import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "チルタリス",
		'zh-tw': "七夕青鳥"
	},

	illustrator: "kurumitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [334],
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "心が 通い合った 人がいると 柔らかく 美しい 羽で そっと 包み込み ハミングする。",
		'zh-tw': "只要與牠心意相通的人在場，牠就會用柔軟的美麗翅膀輕輕包住對方，哼唱起旋律。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かっくう",
			'zh-tw': "滑翔"
		},

		damage: 30
	}, {
		cost: ["Water", "Metal"],

		name: {
			ja: "じゅくすいソング",
			'zh-tw': "熟睡歌曲"
		},

		damage: 110,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。このねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。因這個【睡眠】的擲硬幣次數改為2次，若沒有全部為正面則無法恢復。"
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card