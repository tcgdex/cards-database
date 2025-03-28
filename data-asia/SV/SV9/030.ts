import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ナンジャモのハラバリーex",
		'zh-tw': "奇樹的電肚蛙ex",
		'zh-cn': "奇樹的電肚蛙ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "エレキストリーマー",
			'zh-tw': "電氣流",
			'zh-cn': "電氣流"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分の手札から「基本エネルギー」を1枚選び、自分の「ナンジャモのポケモン」につける。",
			'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張「基本【雷】能量」卡，附於自己的「奇樹的寶可夢」身上。",
			'zh-cn': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張「基本【雷】能量」卡，附於自己的「奇樹的寶可夢」身上。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			ja: "サンダーボルト",
			'zh-tw': "閃電伏特",
			'zh-cn': "閃電伏特"
		},

		damage: 230,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card