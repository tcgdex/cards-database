import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘルガー"
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	dexId: [229],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "不気味な 遠吠えを 聞いた ポケモンは 震え 一目散に 自分の 巣に 戻る。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かみつく"
		},

		damage: 50
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "バークアウト"
		},

		damage: 100,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-100」される。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	rarity: "None"
}

export default card