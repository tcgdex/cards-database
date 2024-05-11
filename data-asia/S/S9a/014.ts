import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水晶燈火靈",
		ja: "シャンデラ"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		'zh-tw': "住在古老的洋樓裡。詭異地搖晃手臂上的火焰， 以此來催眠對手。",
		ja: "古びた 洋館に 棲みつく。 腕の 炎を 妖しく 揺らし 相手を 催眠に かけるぞ。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "炙山",
			ja: "やまあぶり"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。將對手的牌庫上方3張卡丟棄。",
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の山札を上から3枚トラッシュする。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "高溫爆破",
			ja: "ヒートブラスト"
		},

		damage: 90,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [609]
}

export default card