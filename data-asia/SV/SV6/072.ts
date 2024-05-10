import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "エアームド",
		'zh-tw': "盔甲鳥"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "toi8",
	dexId: [227],
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "抜け落ちた 羽根から 剣が 作られることから 紋章の 図案として 人気が 高い。",
		'zh-tw': "由於牠脫落下來的羽毛 能夠製成劍，因此作為 家徽的圖案也很有人氣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "カッターウインド",
			'zh-tw': "利刃之風"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "おおあらし",
			'zh-tw': "大風暴"
		},

		damage: 90,

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card