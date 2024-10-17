import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "列陣兵",
		'zh-cn': "列陣兵",
		ja: "タイレーツ"
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "被稱為頭頭的隊長 會用可伸縮的角 做出變換陣形的指令。",
		'zh-cn': "被稱為頭頭的隊長 會用可伸縮的角 做出變換陣形的指令。",
		ja: "伸縮する ツノで ヘイチョーと 呼ばれる リーダーが 陣形を 組み替える 指示を 出しているぞ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "組成陣形",
			'zh-cn': "組成陣形",
			ja: "じんけいをくむ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "一併攻擊",
			'zh-cn': "一併攻擊",
			ja: "いっせいこうげき"
		},

		effect: {
			'zh-tw': "在上個自己的回合，若這隻寶可夢使用了「‌組成陣形」，則增加90點傷害。",
			'zh-cn': "在上個自己的回合，若這隻寶可夢使用了「‌組成陣形」，則增加90點傷害。",
			ja: "前の自分の番、このポケモンが「じんけいをくむ」を使っていたなら、90ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [870]
}

export default card