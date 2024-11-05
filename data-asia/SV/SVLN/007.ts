import { Card } from "../../../interfaces"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		ja: "オドリドリ"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	dexId: [741],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "うすもものミツを 吸った 姿。 緩やかな ステップで 精神を 高め サイコパワーを 放つ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "エネアシスト"
		},

		effect: {
			ja: "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "げんわくダンス"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		}
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
	rarity: "None"
}

export default card