import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "カエンジシ"
	},

	illustrator: "Po-Suzuki",
	category: "Pokemon",
	dexId: [668],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "群れの メスが 協力して 獲物を 仕留める。 メスたちの おかげで 群れが 飢えないのだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かけぬける"
		},

		damage: 60,

		effect: {
			ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 701065
	}
}

export default card