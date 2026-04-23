import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷唇娃",
		'zh-cn': "迷唇娃",
		ja: "ムチュール"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		'zh-tw': "只要稍微弄髒了臉，就會 馬上去用水沖乾淨。但對於 身體的髒污似乎就不太在意。",
		'zh-cn': "只要稍微弄髒了臉，就會 馬上去用水沖乾淨。但對於 身體的髒污似乎就不太在意。",
		ja: "ちょっとでも 顔が 汚れると 水浴び。 体の 汚れは あまり 気にしていないみたい。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "樂呵呵之吻",
			'zh-cn': "樂呵呵之吻",
			ja: "るんるんキッス"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張「基本【超】能量」卡，附於1隻備戰寶可夢身上。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多2張「基本【超】能量」卡，附於1隻備戰寶可夢身上。並且重洗牌庫。",
			ja: "自分の山札から「基本エネルギー」を2枚まで選び、ベンチポケモン1匹につける。そして山札を切る。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 0,
	regulationMark: "H",
	rarity: "Common",
	dexId: [238],

	thirdParty: {
		cardmarket: 787578
	}
}

export default card