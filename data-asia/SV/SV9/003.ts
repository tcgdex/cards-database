import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "バタフリー",
		'zh-tw': "巴大蝶",
		'zh-cn': "巴大蝶"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [12],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "毎日 ミツを 集めまわる。 脚の 産毛に ミツを 塗りこんで 巣に 持ち帰る 習性をもつ。",
		'zh-tw': "每天都忙著採集花蜜。 習慣在腿部的細毛上塗滿花蜜， 然後帶回巢穴裡。",
		'zh-cn': "每天都忙著採集花蜜。 習慣在腿部的細毛上塗滿花蜜， 然後帶回巢穴裡。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "りんぷんハリケーン",
			'zh-tw': "鱗粉颶風",
			'zh-cn': "鱗粉颶風"
		},

		damage: "60×",

		effect: {
			ja: "コインを4回投げ、オモテの数×60ダメージ。オモテが2回以上なら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲4次硬幣，造成正面出現的次數×60點傷害。若出現2次以上正面，則將對手的戰鬥寶可夢【麻痺】。",
			'zh-cn': "擲4次硬幣，造成正面出現的次數×60點傷害。若出現2次以上正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card