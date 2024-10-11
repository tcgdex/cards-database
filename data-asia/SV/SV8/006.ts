import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ビビヨン"
	},

	illustrator: "Amelicart",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [666],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "不思議な 土地で 生まれた。 色鮮やかな 毒の りんぷんを 翅から 散らして 戦う。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "エボルパウダー"
		},

		effect: {
			ja: "自分のベンチポケモン全員からそれぞれ進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "カッターウインド"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card