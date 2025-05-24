import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "加熱洛托姆",
		'zh-cn': "加熱洛托姆",
		ja: "ヒートロトム"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "如果烤箱微波爐本身運轉不良， 鑽進裡面的洛托姆 也會變得無精打采。",
		'zh-cn': "如果烤箱微波爐本身運轉不良， 鑽進裡面的洛托姆 也會變得無精打采。",
		ja: "オーブンレンジ 自体の 調子が 悪いと 中に 入っている ロトムも 元気が なくなるのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "灼熱",
			'zh-cn': "灼熱",
			ja: "こがす"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			'zh-cn': "將對手的戰鬥寶可夢【灼傷】。",
			ja: "相手のバトルポケモンをやけどにする。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "配件秀",
			'zh-cn': "配件秀",
			ja: "ガジェットショー"
		},

		effect: {
			'zh-tw': "造成自己的所有寶可夢身上附加的「寶可夢道具」卡的數量×30點傷害。",
			'zh-cn': "造成自己的所有寶可夢身上附加的「寶可夢道具」卡的數量×30點傷害。",
			ja: "自分のポケモン全員についている「ポケモンのどうぐ」の数×30ダメージ。"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [479]
}

export default card