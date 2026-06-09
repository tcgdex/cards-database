import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "嘎啦嘎啦",
		'zh-cn': "嘎啦嘎啦",
		ja: "ガラガラ"
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "克服了傷痛後進化得 更強更壯。會把骨頭當作 武器，勇敢地與敵人交鋒。",
		'zh-cn': "克服了傷痛後進化得 更強更壯。會把骨頭當作 武器，勇敢地與敵人交鋒。",
		ja: "悲しみを 乗りこえて たくましく 進化した。 骨を 武器にして 勇敢に 敵と 渡り合う。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "叫聲",
			'zh-cn': "叫聲",
			ja: "なきごえ"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-40」點。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-40」點。",
			ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-40」される。"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "骨之復仇",
			'zh-cn': "骨之復仇",
			ja: "ほねリベンジ"
		},

		effect: {
			'zh-tw': "若自己的備戰區的「卡拉卡拉」身上放置有傷害指示物，則增加120點傷害。",
			'zh-cn': "若自己的備戰區的「卡拉卡拉」身上放置有傷害指示物，則增加120點傷害。",
			ja: "自分のベンチの「カラカラ」にダメカンがのっているなら、120ダメージ追加。"
		},

		damage: "60＋",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [105],

	thirdParty: {
		cardmarket: 779063
	}
}

export default card