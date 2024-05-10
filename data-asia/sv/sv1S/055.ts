import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ドクロッグex",
		'zh-tw': "毒骷蛙ex"
	},

	illustrator: "Nisota Niso",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "わるだくみ",
			'zh-tw': "詭計"
		},

		effect: {
			ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "どくどくリッパー",
			'zh-tw': "劇毒拆裂"
		},

		damage: 120,

		effect: {
			ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は6個になる。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為6個。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card