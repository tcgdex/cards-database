import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "カヌチャン",
		'zh-tw': "小鍛匠"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [957],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "鉄くずを 叩いて ハンマーを 作る。 納得がいく ものが できるまで 何度も 作り直す。",
		'zh-tw': "敲打鐵屑來製作錘子。直到做出自己滿意的作品前，會一次又一次地重做。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "そこぢから",
			'zh-tw': "潛力"
		},

		damage: 40,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card