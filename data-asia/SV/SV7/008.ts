import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幼棉棉",
		'zh-cn': "幼棉棉",
		ja: "ヒメンカ"
	},

	illustrator: "Heisuke Kitazawa",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "當牠把單腳紮進地面裡， 並且沐浴充分的陽光， 花瓣就會染上鮮豔的顏色。",
		'zh-cn': "當牠把單腳紮進地面裡， 並且沐浴充分的陽光， 花瓣就會染上鮮豔的顏色。",
		ja: "一本足を 地面に 刺して 陽の光を たっぷり 浴びると 花びらが 鮮やかに 色づく。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙重旋轉",
			'zh-cn': "雙重旋轉",
			ja: "ダブルスピン"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			'zh-cn': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			ja: "コインを2回投げ、オモテの数×10ダメージ。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [829]
}

export default card