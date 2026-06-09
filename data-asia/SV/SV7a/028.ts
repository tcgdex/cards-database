import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "螺釘地鼠",
		'zh-cn': "螺釘地鼠",
		ja: "モグリュー"
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "只要將兩手的爪子疊在一起， 並高速旋轉身體， 便能以驚人的速度在地底前進。",
		'zh-cn': "只要將兩手的爪子疊在一起， 並高速旋轉身體， 便能以驚人的速度在地底前進。",
		ja: "両手の ツメを 重ね合わせて 体を 高速 回転させると 猛スピードで 地中を 進む。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "掘掘",
			'zh-cn': "掘掘",
			ja: "ほるほる"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			'zh-cn': "將對手的牌庫上方1張卡丟棄。",
			ja: "相手の山札を上から1枚トラッシュする。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "擲泥",
			'zh-cn': "擲泥",
			ja: "どろかけ"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [529],

	thirdParty: {
		cardmarket: 787588
	}
}

export default card