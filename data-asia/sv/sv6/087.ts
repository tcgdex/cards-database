import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "エテボース"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "KEIICHIRO ITO",
	dexId: [424],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "２本に 分かれた 尻尾は いろんなことが 器用に できるので ほとんど 手を 使わなくなった。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いけずなしっぽ"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。コインを2回投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、そのカードのオモテを見て、相手の山札にもどして切る。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ひっぱたく"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card
