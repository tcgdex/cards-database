import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "コノヨザル",
		'zh-tw': "棄世猴",
		'zh-cn': "棄世猴"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [979],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "心に 秘めた 怒りのパワーを こぶしに 込めて 叩きつけると 相手を 骨の髄から 砕く。",
		'zh-tw': "會將隱藏在心中的憤怒之力 注入拳頭發動攻擊，其威力 會深入骨髓，將對手打個粉碎。",
		'zh-cn': "會將隱藏在心中的憤怒之力 注入拳頭發動攻擊，其威力 會深入骨髓，將對手打個粉碎。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あばれまわる",
			'zh-tw': "暴走",
			'zh-cn': "暴走"
		},

		damage: 130,

		effect: {
			ja: "このポケモンをこんらんにする。",
			'zh-tw': "將這隻寶可夢【混亂】。",
			'zh-cn': "將這隻寶可夢【混亂】。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "みちづれファイト",
			'zh-tw': "同命戰鬥",
			'zh-cn': "同命戰鬥"
		},

		effect: {
			ja: "おたがいのバトルポケモンをきぜつさせる。",
			'zh-tw': "將雙方的戰鬥寶可夢【昏厥】。",
			'zh-cn': "將雙方的戰鬥寶可夢【昏厥】。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card