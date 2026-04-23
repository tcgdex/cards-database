import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆焰龜獸",
		'zh-cn': "爆焰龜獸",
		ja: "バクガメス"
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'zh-tw': "背上的甲殼上敷了炸藥。 會用大爆炸去回擊 來攻擊自己的敵人。",
		'zh-cn': "背上的甲殼上敷了炸藥。 會用大爆炸去回擊 來攻擊自己的敵人。",
		ja: "爆薬で コーティングされた 甲羅を 背負う。 攻撃してきた 敵を 大爆発で 返り討ち。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "灼燒盡",
			'zh-cn': "灼燒盡",
			ja: "こがしつくす"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥場的「寶可夢【ex】」身上附加的能量，將其丟棄。",
			'zh-cn': "選擇1個對手的戰鬥場的「寶可夢【ex】」身上附加的能量，將其丟棄。",
			ja: "相手のバトル場の「ポケモンex」についているエネルギーを1個選び、トラッシュする。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "爆熱踩踏",
			'zh-cn': "爆熱踩踏",
			ja: "ばくねつスタンプ"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [776],

	thirdParty: {
		cardmarket: 787604
	}
}

export default card