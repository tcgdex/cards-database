import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電擊魔獸",
		ja: "エレキブル"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'zh-tw': "發電量與心跳數成正比。當牠面臨戰鬥的時候，電壓就會急速飆升。",
		ja: "発電量は 心拍数と 比例する。 戦いになると 一気に ボルテージが 上がるのだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "爆焰伏特",
			ja: "ばくえんボルト"
		},

		effect: {
			'zh-tw': "若自己的備戰區的「鴨嘴炎獸」身上放置有傷害指示物，則增加90點傷害。",
			ja: "自分のベンチの「ブーバーン」にダメカンがのっているなら、90ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "高壓電流",
			ja: "こうあつでんりゅう"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のポケモン全員に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	dexId: [466]
}

export default card