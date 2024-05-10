import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "スナノケガワex",
		'zh-tw': "沙鐵皮ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "じりょくきゅうしゅう",
			'zh-tw': "磁力吸收"
		},

		effect: {
			ja: "相手のサイドの残り枚数が4枚以下なら、自分の番に1回使える。自分のトラッシュから「基本エネルギー」を1枚選び、このポケモンにつける。",
			'zh-tw': "若對手剩餘獎賞卡的張數為4張以下，則在自己的回合時可使用1次。從自己的棄牌區選擇1張「基本【鬥】能量」卡，附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "グラウンドスパイク",
			'zh-tw': "大地扣殺"
		},

		damage: 200,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
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