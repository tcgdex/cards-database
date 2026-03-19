import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ビクティニ",
		'zh-tw': "比克提尼",
		'zh-cn': "比克提尼"
	},

	illustrator: "313",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [494],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "勝利を もたらす ポケモン。 ビクティニを 連れた トレーナーは どんな 勝負にも 勝てるという。",
		'zh-tw': "帶來勝利的寶可夢。 據說帶著比克提尼的訓練家， 不論任何比賽必能取得勝利。",
		'zh-cn': "帶來勝利的寶可夢。 據說帶著比克提尼的訓練家， 不論任何比賽必能取得勝利。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ビクトリーエール",
			'zh-tw': "勝利聲援",
			'zh-cn': "勝利聲援"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のタイプの進化ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+10」される。",
			'zh-tw': "只要這隻寶可夢在場上，自己的【火】屬性的進化寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+10」點。",
			'zh-cn': "只要這隻寶可夢在場上，自己的【火】屬性的進化寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+10」點。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ほのお",
			'zh-tw': "火焰",
			'zh-cn': "火焰"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793446
	}
}

export default card