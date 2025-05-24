import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特",
		'zh-cn': "藏瑪然特",
		ja: "ザマゼンタ"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "能夠反彈一切的攻擊， 因此被稱為格鬥王之盾， 受到人們的畏懼與尊崇。",
		'zh-cn': "能夠反彈一切的攻擊， 因此被稱為格鬥王之盾， 受到人們的畏懼與尊崇。",
		ja: "いかなる 攻撃も 弾き返す 姿は 格闘王の盾 と 呼ばれ 恐れ 崇められた。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "強大猛擊",
			'zh-cn': "強大猛擊",
			ja: "ストロングバッシュ"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，將與受到的傷害相同數值的傷害指示物，放置於使用招式的寶可夢身上。",
			'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害時，將與受到的傷害相同數值的傷害指示物，放置於使用招式的寶可夢身上。",
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、受けたダメージぶんのダメカンを、ワザを使ったポケモンにのせる。"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [889]
}

export default card