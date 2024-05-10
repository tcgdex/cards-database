import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "リザードンex",
		'zh-tw': "噴火龍ex"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "れんごくしはい",
			'zh-tw': "煉獄支配"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札から「基本エネルギー」を3枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫選擇最多3張「基本【火】能量」卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "バーニングダーク",
			'zh-tw': "燃燒黑暗"
		},

		damage: "180+",

		effect: {
			ja: "相手がすでにとったサイドの枚数×30ダメージ追加。",
			'zh-tw': "增加對手已經獲得的獎賞卡的張數×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card