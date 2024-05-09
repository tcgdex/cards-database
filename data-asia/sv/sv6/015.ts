import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "オーガポン みどりのめん"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "Sanosuke Sakuma",
	dexId: [1017],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "いたずら好きで 好奇心旺盛。 仮面に こめられた タイプの エネルギーを 引き出して 戦う。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "やまあるき"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "おにがえし"
		},

		damage: "20＋",

		effect: {
			ja: "相手のベンチポケモンの数×20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card
