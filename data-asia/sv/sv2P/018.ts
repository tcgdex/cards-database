import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ラブカス"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [370],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ハートの 形が 大人気。 好きな 人に ラブカスを 贈る 風習の 残る 土地が ある。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "マッチング"
		},

		effect: {
			ja: "自分の山札からサポートを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "みずのはどう"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card