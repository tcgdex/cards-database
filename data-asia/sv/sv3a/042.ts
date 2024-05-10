import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジラーチ",
		'zh-tw': "基拉祈"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [385],
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "１０００年間で ７日だけ 目を 覚まし どんな 願い事でも かなえる 力を 使うという。",
		'zh-tw': "據說牠在１０００年之中 只有７天時間會醒過來， 使用能實現任何願望的力量。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ステラヴェール",
			'zh-tw': "恆星之幕"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のたねポケモンが使うワザの効果で、ダメカンがのらない。",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢，不會因對手的【基礎】寶可夢使用招式的效果而被放置傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "エネチャージ",
			'zh-tw': "蓄能量"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card