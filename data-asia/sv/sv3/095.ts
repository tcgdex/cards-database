import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ホルビー",
		'zh-tw': "掘掘兔"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	dexId: [659],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "危険に 敏感。 アーマーガアの 羽音を 聴きとると あっという間に 穴を 掘って 地面に 潜る。",
		'zh-tw': "對危險很敏感。只要聽到鋼鎧鴉拍打翅膀的聲音，就會馬上挖洞鑽進地下藏身。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふみふみ",
			'zh-tw': "踏踏"
		},

		damage: "10×",

		effect: {
			ja: "コインを2回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card