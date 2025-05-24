import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "イシズマイ",
		'zh-tw': "石居蟹",
		'zh-cn': "石居蟹"
	},

	illustrator: "Kanami Ogata",
	rarity: "Common",
	category: "Pokemon",
	dexId: [557],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "家に ちょうどいい 小石が 見つからないと カバルドンの 穴に 棲んでしまうことも。",
		'zh-tw': "如果找不到大小合適 的石頭來當成自己的家， 牠也會住到河馬獸的洞裡。",
		'zh-cn': "如果找不到大小合適 的石頭來當成自己的家， 牠也會住到河馬獸的洞裡。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かくせい",
			'zh-tw': "覺醒",
			'zh-cn': "覺醒"
		},

		effect: {
			ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card