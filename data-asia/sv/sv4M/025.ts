import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "オドリドリ"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [741],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "元気 かつ 陽気な ダンスが 子どもたちに 人気の スタイルだが パルデアでは あまり 見かけない。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "チアアップ"
		},

		effect: {
			ja: "自分の手札をすべて山札にもどして切る。その後、おたがいのベンチポケモンの数ぶん、山札を引く。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ショックウェーブ"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card