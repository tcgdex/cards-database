import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>天罩蟲",
		'zh-cn': "<火箭隊的>天罩蟲",
		ja: "ロケット団のレドームシ"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "正在殼裡成長著。 用精神力量掌握外界的 狀況，做好進化的準備。",
		'zh-cn': "正在殼裡成長著。 用精神力量掌握外界的 狀況，做好進化的準備。",
		ja: "殻の 中で 成長中。 サイコパワーで 外の 様子を うかがい 進化に 備えている。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "攪亂雷達",
			'zh-cn': "攪亂雷達",
			ja: "かくらんレーダー"
		},

		effect: {
			'zh-tw': "查看對手的牌庫上方5張卡，以任意順序排列，放回牌庫上方。",
			'zh-cn': "查看對手的牌庫上方5張卡，以任意順序排列，放回牌庫上方。",
			ja: "相手の山札を上から5枚見て、好きな順番に入れ替えて、山札の上にもどす。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "超念力",
			'zh-cn': "超念力",
			ja: "ちょうねんりき"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [825]
}

export default card