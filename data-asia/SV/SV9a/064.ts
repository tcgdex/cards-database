import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤンヤンマ",
		'zh-tw': "蜻蜻蜓",
		'zh-cn': "蜻蜻蜓"
	},

	illustrator: "Ayako Ozaki",
	rarity: "None",
	category: "Pokemon",
	dexId: [193],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "翅を 高速で はためかせて 空中で 停止 しながら 自分の 縄張りを 見張っている。",
		'zh-tw': "會高速拍動翅膀 讓自己靜止在空中， 並監視自己的地盤。",
		'zh-cn': "會高速拍動翅膀 讓自己靜止在空中， 並監視自己的地盤。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふきとばし",
			'zh-tw': "吹飛",
			'zh-cn': "吹飛"
		},

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			'zh-cn': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "するどいはね",
			'zh-tw': "銳利羽",
			'zh-cn': "銳利羽"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card