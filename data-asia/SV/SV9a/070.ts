import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒビキのバクフーン",
		'zh-tw': "<阿響的>火爆獸",
		'zh-cn': "<阿響的>火爆獸"
	},

	illustrator: "GIDORA",
	rarity: "None",
	category: "Pokemon",
	dexId: [157],
	hp: 170,
	types: ["Fire"],

	description: {
		ja: "燃えさかる 体毛を こすり合わせ 爆風を 起こして 攻撃する 大技を 隠し持っている。",
		'zh-tw': "會摩擦熊熊燃燒著的體毛， 掀起爆炸氣浪進行攻擊。 擁有深藏不露的大絕招。",
		'zh-cn': "會摩擦熊熊燃燒著的體毛， 掀起爆炸氣浪進行攻擊。 擁有深藏不露的大絕招。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "バディブラスト",
			'zh-tw': "拍檔爆破",
			'zh-cn': "拍檔爆破"
		},

		damage: "40+",

		effect: {
			ja: "自分のトラッシュにある「ヒビキの冒険」の枚数×60ダメージ追加。",
			'zh-tw': "增加自己的棄牌區的「阿響的冒險」的張數×60點傷害。",
			'zh-cn': "增加自己的棄牌區的「阿響的冒險」的張數×60點傷害。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ばくねつほう",
			'zh-tw': "爆熱炮",
			'zh-cn': "爆熱炮"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card