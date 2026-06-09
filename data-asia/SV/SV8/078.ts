import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ドーミラー",
		'zh-tw': "銅鏡怪",
		'zh-cn': "銅鏡怪"
	},

	illustrator: "Nabatame Kazutaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [436],
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "古い お墓から みつかる。 背中の 模様には 神秘的な 力が 宿っていると いわれる。",
		'zh-tw': "能在古墓發現到牠。 據說牠背上的花紋 寄宿著神秘的力量。",
		'zh-cn': "能在古墓發現到牠。 據說牠背上的花紋 寄宿著神秘的力量。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "シールドアタック",
			'zh-tw': "盾牌攻擊",
			'zh-cn': "盾牌攻擊"
		},

		damage: "20+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			'zh-cn': "擲1次硬幣若為正面，則增加20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793512
	}
}

export default card