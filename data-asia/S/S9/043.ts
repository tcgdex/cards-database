import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天秤偶",
		ja: "ヤジロン"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'zh-tw': "用單腳一邊旋轉一邊移動。有時候也能看到 顛倒過來旋轉的天秤偶。",
		ja: "一本足で 回転しながら 移動する。 逆さまに なって 回転する ヤジロンも 見かける。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "三重旋轉",
			ja: "トリプルスピン"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×20點傷害。",
			ja: "コインを3回投げ、オモテの数×20ダメージ。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [343]
}

export default card