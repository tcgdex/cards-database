import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "グラエナ"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	dexId: [262],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "１０匹 程度の 群れを 作って 一糸乱れぬ チームワークで 獲物を 追いつめて しとめるのだ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ハッスルバーク"
		},

		effect: {
			ja: "相手の場に「ポケモンVMAX」がいるなら、このポケモンがワザを使うためのエネルギーは、エネルギー3個ぶん少なくなる。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ワイルドタックル"
		},

		damage: 160,

		effect: {
			ja: "このポケモンにも50ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 609818
	}
}

export default card