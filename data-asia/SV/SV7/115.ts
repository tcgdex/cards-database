import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蜜集大蛇ex",
		'zh-cn': "蜜集大蛇ex",
		ja: "カミツオロチex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "蜜糖風暴",
			'zh-cn': "蜜糖風暴",
			ja: 'みつあめストーム'
		},

		effect: {
			'zh-tw': "增加自己的所有寶可夢身上附加的【草】能量的數量×30點傷害。",
			'zh-cn': "增加自己的所有寶可夢身上附加的【草】能量的數量×30點傷害。",
			ja: '自分のポケモン全員についているエネルギーの数×30ダメージ追加。'
		},

		damage: "30＋",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",

	abilities: [{
		type: "Ability",

		name: {
			ja: "じゅくせいチャージ",
			'zh-tw': "‌[特性]熟成充能",
			'zh-cn': "‌[特性]熟成充能",
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「基本エネルギー」を1枚選び、自分のポケモンにつける。その後、つけたポケモンのHPを「30」回復する。",
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【草】能量」卡，附於自己的寶可夢身上。然後，將附上那張卡的寶可夢恢復「30」HP。",
			'zh-cn': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【草】能量」卡，附於自己的寶可夢身上。然後，將附上那張卡的寶可夢恢復「30」HP。"
		}
	}],

	rarity: "None"
}

export default card
