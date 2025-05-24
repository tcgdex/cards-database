import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "シロナのガバイト",
		'zh-tw': "<竹蘭的>尖牙陸鯊",
		'zh-cn': "<竹蘭的>尖牙陸鯊"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [444],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "まれに 脱皮し ウロコが 剥げる。 その成分が 含まれる 薬は 疲れた 体を ギンギンにする。",
		'zh-tw': "偶爾脫皮，鱗片會脫落。 含有其成分的藥可以 讓疲勞的身體活力四射。",
		'zh-cn': "偶爾脫皮，鱗片會脫落。 含有其成分的藥可以 讓疲勞的身體活力四射。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おうじゃのよびごえ",
			'zh-tw': "王者呼聲",
			'zh-cn': "王者呼聲"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から「シロナのポケモン」を1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫選擇1張「竹蘭的寶可夢」，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "在自己的回合時可使用1次。從自己的牌庫選擇1張「竹蘭的寶可夢」，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "リューノスライス",
			'zh-tw': "龍切",
			'zh-cn': "龍切"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card