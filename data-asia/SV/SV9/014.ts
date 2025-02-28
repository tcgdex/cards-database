import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ブーバーン",
		'zh-tw': "鴨嘴炎獸",
		'zh-cn': "鴨嘴炎獸"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [467],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "腕の先から 摂氏２０００度の 火の玉を 撃ちだすとき 体は 熱のため ほのかに 白くなる。",
		'zh-tw': "從手腕前端射出 攝氏２０００度的火球時， 身體會因高溫而微微泛白。",
		'zh-cn': "從手腕前端射出 攝氏２０００度的火球時， 身體會因高溫而微微泛白。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マグマのはどう",
			'zh-tw': "熔岩波動",
			'zh-cn': "熔岩波動"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のやけどのポケモンは、やけどでのせるダメカンの数が3個多くなる。",
			'zh-tw': "只要這隻寶可夢在場上，對手的【灼傷】的寶可夢因【灼傷】而放置的傷害指示物的數量增加3個。",
			'zh-cn': "只要這隻寶可夢在場上，對手的【灼傷】的寶可夢因【灼傷】而放置的傷害指示物的數量增加3個。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "やきこがす",
			'zh-tw': "灼燒",
			'zh-cn': "灼燒"
		},

		damage: 90,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【灼傷】。",
			'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【灼傷】。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card