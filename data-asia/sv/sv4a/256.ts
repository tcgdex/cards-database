import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネイティ",
		'zh-tw': "天然雀"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	dexId: [177],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "羽が 育ちきって おらず 飛び跳ねるようにして 移動する。 いつも なにかを 見つめている。",
		'zh-tw': "翅膀還沒有完全長好，所以只能一跳一跳地移動。 一直在注視著什麼。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "さんれんづき",
			'zh-tw': "三連撞"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card