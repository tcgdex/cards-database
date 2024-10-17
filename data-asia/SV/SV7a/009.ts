import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "破空焰",
		'zh-cn': "破空焰",
		ja: "ウガツホムラ"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "目擊報告極為稀少。 有將牠噴出火柱大鬧的 樣子拍攝下來的短片。",
		'zh-cn': "目擊報告極為稀少。 有將牠噴出火柱大鬧的 樣子拍攝下來的短片。",
		ja: "目撃報告は ごくわずか。 火柱を 噴き 暴れる 姿の 短い 映像が 存在する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞倒",
			'zh-cn': "撞倒",
			ja: "つきたおし"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "爆燃突擊",
			'zh-cn': "爆燃突擊",
			ja: "えんじょうとつげき"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為4張以下，則增加70點傷害。",
			'zh-cn': "若對手剩餘獎賞卡的張數為4張以下，則增加70點傷害。",
			ja: "相手のサイドの残り枚数が4枚以下なら、70ダメージ追加。"
		},

		damage: "100＋",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [1020]
}

export default card