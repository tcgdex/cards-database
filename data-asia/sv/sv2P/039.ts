import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "オコリザル",
		'zh-tw': "火爆猴"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [57],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "だれかの 視線を 感じただけで 猛烈に 怒りだす。 そして 目が合った ものを 追いかけるのだ。",
		'zh-tw': "光是感覺到他方的視線都會暴怒起來，然後去追 和牠對到眼的傢伙。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "けたぐり",
			'zh-tw': "踢倒"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ぶんなぐる",
			'zh-tw': "狂毆"
		},

		damage: "60+",

		effect: {
			ja: "コインを1回投げオモテなら、60ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加60點傷害。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card