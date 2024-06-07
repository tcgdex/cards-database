import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "バチンキー",
		'zh-tw': "啪咚猴"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "GOSSAN",
	dexId: [811],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "２本の スティックで 激しい ビートを 刻める バチンキーほど 仲間たちの 尊敬を 集める。",
		'zh-tw': "越是能用２根木棒敲奏出 激烈節拍的啪咚猴，越是 能獲得夥伴們的尊敬。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ドンドンだいこ",
			'zh-tw': "衝衝鼓"
		},

		effect: {
			ja: "自分のバトルポケモンが特性「おまつりおんど」を持つポケモンなら、自分の番に1回使える。自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
			'zh-tw': "若自己的戰鬥寶可夢為擁有特性「祭典樂舞」的寶可夢，則在自己的回合時可使用1次。從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card