import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホップのカビゴン",
		'zh-tw': "赫普的卡比獸",
		'zh-cn': "赫普的卡比獸"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [143],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "眠っているとき以外は つねに エサを 食べている 大食らい。 １日に ４００キロも たいらげる。",
		'zh-tw': "除了睡著時之外，總是不斷 在進食。是個一天能吃光 ４００公斤食物的大胃王。",
		'zh-cn': "除了睡著時之外，總是不斷 在進食。是個一天能吃光 ４００公斤食物的大胃王。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ふとっぱら",
			'zh-tw': "大方",
			'zh-cn': "大方"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分の「ホップのポケモン」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			'zh-tw': "只要這隻寶可夢在場上，自己的「赫普的寶可夢」使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			'zh-cn': "只要這隻寶可夢在場上，自己的「赫普的寶可夢」使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ダイナミックプレス",
			'zh-tw': "極限壓制",
			'zh-cn': "極限壓制"
		},

		damage: 140,

		effect: {
			ja: "このポケモンにも80ダメージ。",
			'zh-tw': "這隻寶可夢也受到80點傷害。",
			'zh-cn': "這隻寶可夢也受到80點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I"
}

export default card