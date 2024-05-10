import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "カプサイジ",
		'zh-tw': "熱辣娃"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	dexId: [951],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "パルデアの 郷土料理は 抜け落ちた カプサイジの 前歯が 使われているので 激辛なのだ。",
		'zh-tw': "帕底亞當地會用熱辣娃掉落的門牙來做料理， 所以超級無敵霹靂辣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "からくなる",
			'zh-tw': "變辣"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張「基本【火】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "やんちゃげり",
			'zh-tw': "調皮踢"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card