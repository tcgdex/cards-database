import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "猛雷鼓",
		'zh-cn': "猛雷鼓",
		ja: "タケルライコ"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		'zh-tw': "據說會從體毛釋放出 雷電將周圍燒成焦土。 具體詳情不明。",
		'zh-cn': "據說會從體毛釋放出 雷電將周圍燒成焦土。 具體詳情不明。",
		ja: "体毛から 放つ 雷で あたりを 焼きつくすと いわれる。 詳しいことは わかっていない。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "落雷風暴",
			'zh-cn': "落雷風暴",
			ja: "らくらいあらし"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到這隻寶可夢身上附加的能量的數量×30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的1隻寶可夢受到這隻寶可夢身上附加的能量的數量×30點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のポケモン1匹に、このポケモンについているエネルギーの数×30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Lightning", "Fighting"]
	}, {
		name: {
			'zh-tw': "龍之頭擊",
			'zh-cn': "龍之頭擊",
			ja: "リューズヘッド"
		},

		damage: 130,
		cost: ["Lightning", "Fighting", "Colorless"]
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [1021]
}

export default card