import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "シシコ",
		'zh-tw': "小獅獅"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [667],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "幼いうちに メスの カエンジシに 狩りを 教わるが 成長すると 群れを 離れて 独り立ちする。",
		'zh-tw': "年幼時雌性的火炎獅會教導自己如何狩獵， 長大後就會離群索居。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "まるやけ",
			'zh-tw': "燒光"
		},

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。"
		}
	}, {
		cost: ["Fire"],

		name: {
			ja: "ひだね",
			'zh-tw': "火種"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card