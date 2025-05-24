import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペパーのホシガリス",
		'zh-tw': "<派帕的>貪心栗鼠",
		'zh-cn': "<派帕的>貪心栗鼠"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [819],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "ほっぺに 木の実を 蓄える。 木の実が なく 口寂しいときは 小石を ふくんで 耐えしのぐ。",
		'zh-tw': "會把樹果囤積在雙頰裡。 沒有樹果而感到嘴裡空虛時， 會含著小石子來忍過去。",
		'zh-cn': "會把樹果囤積在雙頰裡。 沒有樹果而感到嘴裡空虛時， 會含著小石子來忍過去。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かじりとる",
			'zh-tw': "咬取",
			'zh-cn': "咬取"
		},

		damage: 10,

		effect: {
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。",
			'zh-cn': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card