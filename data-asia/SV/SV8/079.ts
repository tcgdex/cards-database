import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ドータクン",
		'zh-tw': "青銅鐘",
		'zh-cn': "青銅鐘"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [437],
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "別世界への 穴を 開けて そこから 雨を 降らしていた。 そのため 豊作の神 とされる。",
		'zh-tw': "打開通往其他世界的洞， 從那裡降下雨來。 因此被叫做豐收之神。",
		'zh-cn': "打開通往其他世界的洞， 從那裡降下雨來。 因此被叫做豐收之神。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "かいてんアタック",
			'zh-tw': "迴轉攻擊",
			'zh-cn': "迴轉攻擊"
		},

		damage: 50
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "ダブルインパクト",
			'zh-tw': "雙重衝擊",
			'zh-cn': "雙重衝擊"
		},

		damage: "100×",

		effect: {
			ja: "コインを2回投げ、オモテの数×100ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×100點傷害。",
			'zh-cn': "擲2次硬幣，造成正面出現的次數×100點傷害。"
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

	retreat: 3,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793513
	}
}

export default card