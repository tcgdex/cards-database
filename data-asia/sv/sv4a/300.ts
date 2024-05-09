import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロロン"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	dexId: [965],
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "スクラップ工場に 放置された エンジンに 謎の 毒ポケモンが 入り込んで 生まれたと 言われる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふかす"
		},

		effect: {
			ja: "自分のトラッシュから基本エネルギーを2枚まで選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			ja: "ずつき"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 1
}

export default card