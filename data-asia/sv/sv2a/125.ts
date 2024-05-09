import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "エレブー"
	},

	illustrator: "NC Empire",
	rarity: "Common",
	category: "Pokemon",
	dexId: [125],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "嵐が 来ると 高い 木の まわりに 集まり 雷が 落ちるのを じっと 待ち続ける。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "エレキコンボ"
		},

		damage: "10＋",

		effect: {
			ja: "自分のベンチに「ブーバー」がいるなら、40ダメージ追加。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "なぐる"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card