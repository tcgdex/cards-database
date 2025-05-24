import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉洛克ex",
		'zh-cn': "雷吉洛克ex",
		ja: "レジロックex"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "雷吉充能",
			'zh-cn': "雷吉充能",
			ja: "レジチャージ"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【鬥】能量」卡，附於這隻寶可夢身上。",
			'zh-cn': "從自己的棄牌區選擇最多2張「基本【鬥】能量」卡，附於這隻寶可夢身上。",
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、このポケモンにつける。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "巨型岩石",
			'zh-cn': "巨型岩石",
			ja: "ジャイアントロック"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為【2階進化】寶可夢，則增加140點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢為【2階進化】寶可夢，則增加140點傷害。",
			ja: "相手のバトルポケモンが2進化ポケモンなら、140ダメージ追加。"
		},

		damage: "140＋",
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Double rare"
}

export default card