import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "キリキザン",
		'zh-tw': "劈斬司令"
	},

	illustrator: "NC Empire",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [625],
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		ja: "コマタナ"
	},

	description: {
		ja: "大勢の コマタナを 従える。 手下たちが 裏切らない よう 常に 目を 光らせている。",
		'zh-tw': "率領著一大群駒刀小兵。為了防止手下們背叛自己， 總是睜大著眼睛監視牠們。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "しかえしぎり",
			'zh-tw': "回擊斬"
		},

		effect: {
			ja: "自分のベンチの「コマタナ」全員にのっているダメカンの数×30ダメージ追加。",
			'zh-tw': "增加自己的備戰區所有「駒刀小兵」身上放置的傷害指示物數量×30點傷害。"
		},

		damage: "30+",
		cost: ["Metal"]
	}, {
		name: {
			ja: "スライスブレード",
			'zh-tw': "利刃切割"
		},

		damage: 90,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651019,
				tcgplayer: 569806,
				cardtrader: 234116,
			},
		},
	]
}

export default card