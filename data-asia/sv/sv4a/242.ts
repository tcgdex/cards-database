import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "レントラー"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	dexId: [405],
	hp: 150,
	types: ["Lightning"],

	description: {
		ja: "壁の向こうも 見える 力で 逃げた 獲物を 追いつめるほかにも 迷子の 子どもを 捜したりする。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みなぎるせんこう"
		},

		effect: {
			ja: "自分の番に、このカードが手札にあり、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、1回使える。このカードをベンチに出す。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ワイルドボルト"
		},

		damage: 180,

		effect: {
			ja: "このポケモンにも20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card