import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "マフィティフ",
		'zh-tw': "獒教父"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [943],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "子どもと 遊ぶことが 大好き。 普段は 温厚だが 家族を 守るとき 形相が 変わる。",
		'zh-tw': "非常喜歡和小孩玩耍。平時性情溫和，但在保護 家族時表情會為之一變。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いかくのとおぼえ",
			'zh-tw': "威嚇長嚎"
		},

		effect: {
			ja: "自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "在自己的回合時可使用1次。將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ワイルドタックル",
			'zh-tw': "狂野衝撞"
		},

		damage: 160,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card