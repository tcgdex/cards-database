import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サイホーン",
		'zh-tw': "獨角犀牛"
	},

	illustrator: "GOSSAN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [111],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "ひとつの ことしか 覚えられない。 突進を はじめると 理由は どうでもよくなり すぐに 忘れる。",
		'zh-tw': "腦子裡只能記住一件事。一旦開始猛衝，不管理由是什麼 都會很快感到無所謂而忘掉。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "つきとばす",
			'zh-tw': "推倒"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ロックスマッシュ",
			'zh-tw': "岩石粉碎"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card