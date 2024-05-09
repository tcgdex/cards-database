import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ストリンダー"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [849],
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "どんな 相手にも 動じず 気だるげに ケンカを売る スタイルに 憧れる 若者も 多い。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "にらみつける"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ミックスラウド"
		},

		damage: "50＋",

		effect: {
			ja: "自分のベンチポケモンのタイプの数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card