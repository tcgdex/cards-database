import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒヤッキー"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [516],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "水が きれいな 場所を 好む。 頭に ためこんだ 水が減ると 尻尾から 吸いあげて 補給。"
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
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "あびせかける"
		},

		damage: 50,

		effect: {
			ja: "相手のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card