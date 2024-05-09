import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "マフィティフ"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	dexId: [943],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "子どもと 遊ぶことが 大好き。 普段は 温厚だが 家族を 守るとき 形相が 変わる。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いかくのとおぼえ"
		},

		effect: {
			ja: "自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ワイルドタックル"
		},

		damage: 160,

		effect: {
			ja: "このポケモンにも30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card