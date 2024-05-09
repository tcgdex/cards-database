import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤナッキー"
	},

	illustrator: "Kurata So",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [512],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "気性が 激しく トゲの ついた 尻尾を 振り回して 戦う。 頭の 葉っぱは とても 苦い。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "モンキートリオ"
		},

		effect: {
			ja: "自分の場に「ヤナッキー」「バオッキー」「ヒヤッキー」がいるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "つっぱりニードル"
		},

		damage: 100,

		effect: {
			ja: "次の相手の番、このポケモンは特性を持つポケモン（「ヤナッキー」をのぞく）からワザのダメージを受けない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card