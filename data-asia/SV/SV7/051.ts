import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鑽角犀獸",
		'zh-cn': "鑽角犀獸",
		ja: "サイドン"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "進化後變得可以只用 後腳步行，因此將棲息地 拓展到了險峻的山地。",
		'zh-cn': "進化後變得可以只用 後腳步行，因此將棲息地 拓展到了險峻的山地。",
		ja: "後ろ脚だけで 歩けるように 進化したので 険しい 山にも 生息地を 広げられたのだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "破壞之角",
			'zh-cn': "破壞之角",
			ja: "はかいのつの"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H",
	rarity: "Common",
	dexId: [112],

	thirdParty: {
		cardmarket: 779065
	}
}

export default card