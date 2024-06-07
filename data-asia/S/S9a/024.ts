import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 幽尾玄魚",
		ja: "ヒスイ イダイトウ"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "在溯河而上的旅程中半途喪命者的靈魂纏繞其身。在流經洗翠地區 的河川裡可謂所向無敵。",
		ja: "遡上の旅路にて 志半ばに 散った 輩の魂を まとう。 ヒスイ 流れし 河川においては 敵うもの 皆無なり。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "怨恨奇襲",
			ja: "うらみのダイブ"
		},

		effect: {
			'zh-tw': "若在上個對手的回合，自己的寶可夢因招式的傷害而【氣絕】了，則增加90點傷害，並將對手的戰鬥寶可夢【混亂】。",
			ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加し、相手のバトルポケモンをこんらんにする。"
		},

		damage: "30＋",
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "噴射頭擊",
			ja: "ジェットヘッド"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [902]
}

export default card