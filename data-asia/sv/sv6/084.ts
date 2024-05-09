import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ラッキー"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "HYOGONOSUKE",
	dexId: [113],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "持っている タマゴを 割らないように 気をつけて 歩く。 でも 逃げ足は とても 速い。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ラッキーアタッチ"
		},

		effect: {
			ja: "自分の手札から基本エネルギーを1枚選び、自分のポケモンにつける。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "そこぢから"
		},

		damage: 80,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card
