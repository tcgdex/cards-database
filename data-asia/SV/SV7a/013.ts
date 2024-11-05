import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "潤水鴨",
		'zh-cn': "潤水鴨",
		ja: "クワッス"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "擁有在水流湍急的河川 也能自在游動的腳力。 愛乾淨，個性不知變通。",
		'zh-cn': "擁有在水流湍急的河川 也能自在游動的腳力。 愛乾淨，個性不知變通。",
		ja: "流れが 急な 川も 自由に 泳ぎまわる 脚力を 持つ。 きれい好きで 思い込みが 強い。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "燕返",
			'zh-cn': "燕返",
			ja: "つばめがえし"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			'zh-cn': "擲1次硬幣若為正面，則增加20點傷害。",
			ja: "コインを1回投げオモテなら、20ダメージ追加。"
		},

		damage: "10＋",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [912]
}

export default card