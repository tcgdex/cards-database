import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ドロンチ",
		'zh-tw': "多龍奇"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "cochi8i",
	dexId: [886],
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "肺に エネルギーを溜め 撃ち出す。 ドラメシヤが 立派に 育つまで 一緒に 戦い 世話もする。",
		'zh-tw': "會用儲存在肺部的能量進行攻擊。 在多龍梅西亞能獨當一面前， 都會一起戰鬥並照顧起居。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ていさつしれい",
			'zh-tw': "偵查指令"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を上から2枚見て、どちらか1枚を選び、手札に加える。残りのカードは、山札の下にもどす。",
			'zh-tw': "在自己的回合時可使用1次。查看自己的牌庫上方2張卡，選擇其中1張，加入手牌。將剩餘卡放回牌庫下方。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Psychic"],

		name: {
			ja: "リューズヘッド",
			'zh-tw': "龍之頭擊"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card