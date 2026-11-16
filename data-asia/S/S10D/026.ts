import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "フワンテ",
		'zh-tw': "飄飄球"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [425],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "幼子 惑わし 彼岸へ 連れ去ると 伝えられし ポケモン。 人魂より 転生したと 噂あるも 真偽不明なり。",
		'zh-tw': "傳說會迷惑幼童，將其帶往另一個 世界的寶可夢。也有傳聞說牠是由 鬼魂轉生而成，但不知是真是假。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "トリプルスピン",
			'zh-tw': "三重旋轉"
		},

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		},

		damage: "10×",
		cost: ["Psychic"]
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
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650989,
				tcgplayer: 569781,
				cardtrader: 234092,
			},
		},
	]
}

export default card