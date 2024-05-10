import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "トサキント",
		'zh-tw': "角金魚"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [118],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "背びれ 胸びれが 筋肉のように 発達しており 水中を ５ノットの 速さで 泳ぐ。",
		'zh-tw': "背鰭和尾鰭像肌肉那樣發達。能夠以 ５節的速度在水中游泳。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "さんれんづき",
			'zh-tw': "三連撞"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うちみず",
			'zh-tw': "潑灑清水"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card