import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "エテボース",
		'zh-tw': "雙尾怪手"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "KEIICHIRO ITO",
	dexId: [424],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "２本に 分かれた 尻尾は いろんなことが 器用に できるので ほとんど 手を 使わなくなった。",
		'zh-tw': "分叉成２根的尾巴非常靈活， 能夠完成各式各樣的事情， 因此變得幾乎不使用雙手了。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いけずなしっぽ",
			'zh-tw': "使壞之尾"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。コインを2回投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、そのカードのオモテを見て、相手の山札にもどして切る。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。擲2次硬幣，在不看手牌正面的情況下，從對手的手牌選擇與正面出現的次數相同數量的卡，查看那些卡的正面後放回對手的牌庫並重洗。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ひっぱたく",
			'zh-tw': "重摑"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card