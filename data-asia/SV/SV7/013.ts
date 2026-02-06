import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夜盜火蜥",
		'zh-cn': "夜盜火蜥",
		ja: "ヤトウモリ"
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "唯有雌性製造的氣體會釋放 費洛蒙。被迷得神魂顛倒的 雄性會對雌性唯命是從。",
		'zh-cn': "唯有雌性製造的氣體會釋放 費洛蒙。被迷得神魂顛倒的 雄性會對雌性唯命是從。",
		ja: "メスのみが フェロモンを 発する ガスを 作れる。 骨抜きにされた オスは メスの 言いなりになるぞ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火花",
			'zh-cn': "火花",
			ja: "ひのこ"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [757],

	thirdParty: {
		cardmarket: 779025
	}
}

export default card