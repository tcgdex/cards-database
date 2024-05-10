import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "カヌチャン",
		'zh-tw': "小鍛匠"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [957],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "鉄くずを 叩いて ハンマーを 作る。 納得がいく ものが できるまで 何度も 作り直す。",
		'zh-tw': "敲打鐵屑來製作錘子。直到做出自己滿意的作品前，會一次又一次地重做。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "やまあさり",
			'zh-tw': "找山"
		},

		effect: {
			ja: "自分の山札を上から1枚見る。そのカードを手札に加える。または、そのカードをトラッシュし、自分の山札を1枚引く。",
			'zh-tw': "查看自己的牌庫上方1張卡。將那些卡加入手牌。或者將那張卡丟棄，從自己的牌庫抽出1張卡。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "つぶやく",
			'zh-tw': "囈語"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card