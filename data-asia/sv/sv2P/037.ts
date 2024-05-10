import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ベラカス",
		'zh-tw': "蟲甲聖"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [954],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "玉を 支える 体は ほとんど 動かないため 本体は 玉の中にいると 考えられている。",
		'zh-tw': "支撐球的身體幾乎不動，因此人們認為牠的本體 其實是在球裡面。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "さいきのいのり",
			'zh-tw': "復生祈禱"
		},

		effect: {
			ja: "自分のトラッシュからポケモンを1枚選び、ベンチに出す。",
			'zh-tw': "從自己的棄牌區選擇1張寶可夢卡，放置於備戰區。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "サイケこうせん",
			'zh-tw': "幻象光線"
		},

		damage: 50,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card