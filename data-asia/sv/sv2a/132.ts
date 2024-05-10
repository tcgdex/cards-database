import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "メタモン",
		'zh-tw': "百變怪"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [132],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "変身は 完璧なのだが 笑わされて 力が 抜けると 変身は 解けてしまう。",
		'zh-tw': "雖然可以變身得很完美，但一旦被逗笑， 就會因鬆懈而解除變身。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "へんしんスタート",
			'zh-tw': "變身啓動"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、最初の自分の番にだけ1回使える。自分の山札からたねポケモン（「メタモン」をのぞく）を1枚選ぶ。その後、このポケモンと、ついているすべてのカードをトラッシュし、このポケモンがいた場所に、選んだポケモンを出す。そして山札を切る。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則只有在自己的最初回合可使用1次。從自己的牌庫選擇1張【基礎】寶可夢卡（「百變怪」除外）。然後，將這隻寶可夢與附加的卡全部丟棄，將所選的寶可夢放置於這隻寶可夢原先所在的地方。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぺとっ",
			'zh-tw': "黏"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card